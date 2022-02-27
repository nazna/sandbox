package usecase

import "example-golang-echo/src/domain/model"

func UserCreate(id string) *model.User {
	user := &model.User{
		Id:   "1",
		Name: "Alma",
	}

	return user
}
