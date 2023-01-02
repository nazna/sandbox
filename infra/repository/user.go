package repository

import (
	"context"
	"database/sql"
	"example-gqlgen-sqlc/domain"
	"example-gqlgen-sqlc/infra/dao"
	"fmt"
	"strconv"

	"github.com/szktty/go-clockwork-base32"
)

type UserRepository struct {
	queries *dao.Queries
}

func NewUserRepository(conn *sql.DB) *UserRepository {
	return &UserRepository{
		queries: dao.New(conn),
	}
}

func (r *UserRepository) FindUser(ctx context.Context, userId string) (*domain.User, error) {
	id, err := strconv.ParseInt(userId, 10, 64)

	if err != nil {
		return nil, domain.ApplicationError{Code: domain.ErrorCode.BadRequest, Msg: "ユーザーIDが不正です"}
	}

	u, err := r.queries.FindUser(ctx, id)

	if err != nil {
		return nil, domain.ApplicationError{Code: domain.ErrorCode.UserNotFound, Msg: "ユーザーが見つかりません"}
	}

	return &domain.User{
		ID:        string(clockwork.Encode([]byte(fmt.Sprintf("User:%d", u.UserID)))),
		UserID:    fmt.Sprint(u.UserID),
		Username:  u.Username,
		CreatedAt: u.CreatedAt,
		UpdatedAt: u.UpdatedAt,
	}, nil
}
