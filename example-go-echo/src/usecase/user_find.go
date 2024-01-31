package usecase

import (
	"example-golang-echo/src/domain/model"
	"fmt"
	"net/http"

	"github.com/rs/zerolog"
)

func UserFind(id string) (*model.User, error) {
	if id == "0" {
		return nil, model.NewAppError(http.StatusBadRequest, model.ErrUserNotFound, zerolog.InfoLevel, fmt.Sprintf("User not found. id=%s", id), nil)
	}

	user := &model.User{
		Id:   id,
		Name: "Alice",
	}

	return user, nil
}
