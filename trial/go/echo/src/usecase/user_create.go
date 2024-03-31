package usecase

import (
	"example-golang-echo/src/domain/model"
	"example-golang-echo/src/domain/request"
)

func UserCreate(input *request.UserCreateRequest) (*model.User, error) {
	user := &model.User{
		Id:   "10",
		Name: input.Name,
	}

	return user, nil
}
