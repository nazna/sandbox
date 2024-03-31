package domain

import "context"

type UserRepository interface {
	FindUser(ctx context.Context, userId string) (*User, error)
}
