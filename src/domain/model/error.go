package model

const (
	UserNotFound = "UserNotFound"
)

type ApiErrorResponse struct {
	Code    string
	Message string
	Detail  string
}
