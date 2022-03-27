package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type apiErrorResponse struct {
	Message string
}

func ApiError(err error, c echo.Context) {
	// check http error?

	code := http.StatusInternalServerError
	message := "Something happened"

	c.Logger().Error(err)

	c.JSON(code, &apiErrorResponse{
		Message: message,
	})
}
