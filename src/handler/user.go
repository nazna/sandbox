package handler

import (
	"example-golang-echo/src/usecase"

	"net/http"

	"github.com/labstack/echo/v4"
)

func UserFind(c echo.Context) error {
	id := c.Param("id")
	return c.JSON(http.StatusOK, usecase.UserFind(id))
}

func UserCreate(c echo.Context) error {
	return c.JSON(http.StatusCreated, usecase.UserCreate("1"))
}
