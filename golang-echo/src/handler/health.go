package handler

import (
	"example-golang-echo/src/domain/model"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Readyz(c echo.Context) error {
	return c.JSON(http.StatusOK, &model.Health{
		Status: "ok",
	})
}

func Livez(c echo.Context) error {
	return c.JSON(http.StatusOK, &model.Health{
		Status: "ok",
	})
}
