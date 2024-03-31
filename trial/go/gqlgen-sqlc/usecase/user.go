package usecase

import (
	"context"
	"example-gqlgen-sqlc/domain"
)

type UserUsecase struct {
	repository domain.UserRepository
}

func NewUserUsecase(repository domain.UserRepository) *UserUsecase {
	return &UserUsecase{
		repository: repository,
	}
}

func (u *UserUsecase) FindUser(ctx context.Context, userId string) (*domain.User, error) {
	return u.repository.FindUser(ctx, userId)
}
