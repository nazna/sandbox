package resolver

import "example-gqlgen-sqlc/usecase"

type Resolver struct {
	userUsecase *usecase.UserUsecase
}

func NewResolver(userUsecase *usecase.UserUsecase) *Resolver {
	return &Resolver{
		userUsecase: userUsecase,
	}
}
