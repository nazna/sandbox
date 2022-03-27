package handler

import (
	"example-golang-echo/src/domain/request"
	"example-golang-echo/src/usecase"

	"net/http"

	"github.com/labstack/echo/v4"
)

func UserFind(c echo.Context) error {
	id := c.Param("id")

	user, err := usecase.UserFind(id)

	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, user)
}

func UserCreate(c echo.Context) error {
	input := new(request.UserCreateRequest)

	if err := c.Bind(input); err != nil {
		return err
	}

	user, err := usecase.UserCreate(input)

	if err != nil {
		return err
	}

	return c.JSON(http.StatusCreated, user)
}
