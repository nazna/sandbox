package handler

import (
	"errors"
	"example-golang-echo/src/domain/model"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ErrorResponse struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func ErrorResponder(err error, c echo.Context) {
	var appError model.AppError

	if errors.As(err, &appError) {
		status := appError.Status
		code := appError.Code
		level := appError.Level
		message := appError.Message

		c.Logger().Error(status, code, level, message, err)

		err = c.JSON(status, ErrorResponse{
			Code:    code,
			Message: message,
		})
	}

	err = c.JSON(http.StatusInternalServerError, ErrorResponse{
		Code:    model.ErrUnknown,
		Message: "Unknown error",
	})
}
