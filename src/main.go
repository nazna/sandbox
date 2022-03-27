package main

import (
	"example-golang-echo/src/handler"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.HideBanner = true
	e.HidePort = true
	// e.HTTPErrorHandler = handler.ApiError

	e.Pre(middleware.RemoveTrailingSlash())
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())

	e.GET("/readyz", handler.Readyz)
	e.GET("/livez", handler.Livez)

	e.GET("/api/users/:id", handler.UserFind)
	e.POST("/api/users", handler.UserCreate)

	e.Logger.Fatal(e.Start(":8080"))
}
