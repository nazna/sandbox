package main

import (
	"context"
	"database/sql"
	"errors"
	"example-gqlgen-sqlc/domain"
	"example-gqlgen-sqlc/infra/repository"
	"example-gqlgen-sqlc/resolver"
	"example-gqlgen-sqlc/usecase"
	"net/http"
	"regexp"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	_ "github.com/mattn/go-sqlite3"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

func main() {
	// initialize logger in development
	config := zap.NewDevelopmentConfig()
	config.DisableCaller = true
	config.DisableStacktrace = true
	config.EncoderConfig.TimeKey = "timestamp"
	config.EncoderConfig.EncodeTime = zapcore.RFC3339NanoTimeEncoder

	logger := zap.Must(config.Build()).Sugar()
	defer logger.Sync()

	// initialize database connection
	conn, err := sql.Open("sqlite3", "./sandbox.sqlite3")

	if err != nil {
		logger.Fatal(err)
	}
	defer conn.Close()

	// initialize dependencies
	userRepository := repository.NewUserRepository(conn)
	userUsecase := usecase.NewUserUsecase(userRepository)
	resolvers := resolver.NewResolver(userUsecase)

	// build server
	server := handler.NewDefaultServer(resolver.NewExecutableSchema(resolver.Config{Resolvers: resolvers}))

	// access logging
	server.AroundOperations(func(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
		oc := graphql.GetOperationContext(ctx)
		re := regexp.MustCompile(`[\n ]+`)

		logger.Infow("hello", "operation_name", oc.OperationName, "query", re.ReplaceAllString(oc.RawQuery, " "), "variables", oc.Variables)

		return next(ctx)
	})

	// expected error handling and logging
	server.SetErrorPresenter(func(ctx context.Context, e error) *gqlerror.Error {
		err := graphql.DefaultErrorPresenter(ctx, e)

		var applicationError domain.ApplicationError

		if errors.As(err, &applicationError) {
			switch applicationError.Code.Level() {
			case zap.InfoLevel:
				logger.Infow(applicationError.Msg, "code", applicationError.Code.Code(), "status", applicationError.Code.Status())
			case zap.WarnLevel:
				logger.Warnw(applicationError.Msg, "code", applicationError.Code.Code(), "status", applicationError.Code.Status())
			case zap.ErrorLevel:
				logger.Errorw(applicationError.Msg, "code", applicationError.Code.Code(), "status", applicationError.Code.Status())
			default:
				logger.Warnw(applicationError.Msg, "code", applicationError.Code.Code(), "status", applicationError.Code.Status())
			}

			return &gqlerror.Error{
				Message: applicationError.Msg,
				Extensions: map[string]interface{}{
					"code":   applicationError.Code.Code(),
					"status": applicationError.Code.Status(),
				},
			}
		}

		return err
	})

	// unexpected error handling and logging
	server.SetRecoverFunc(func(ctx context.Context, err interface{}) error {
		applicationError := domain.ErrorCode.Unexpected

		logger.Errorw("不明なエラーです", "code", applicationError.Code(), "status", applicationError.Status())

		return &gqlerror.Error{
			Message: "不明なエラーです",
			Extensions: map[string]interface{}{
				"code":   applicationError.Code(),
				"status": applicationError.Status(),
			},
		}
	})

	http.Handle("/", playground.Handler("GraphiQL", "/graphql"))
	http.Handle("/graphql", server)

	logger.Infow("Server is running on http://localhost:8080")
	logger.Fatal(http.ListenAndServe(":8080", nil))
}
