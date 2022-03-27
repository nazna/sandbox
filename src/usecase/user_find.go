package usecase

import "example-golang-echo/src/domain/model"

func UserFind(id string) (*model.User, error) {
	user := &model.User{
		Id:   id,
		Name: "Alice",
	}

	return user, nil
}
