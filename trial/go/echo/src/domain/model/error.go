package model

import "github.com/rs/zerolog"

const (
	ErrUserNotFound = "UserNotFound"
	ErrUnknown      = "Unknown"
)

type AppError struct {
	Status  int
	Code    string
	Level   zerolog.Level
	Message string
	Err     error
}

func NewAppError(status int, code string, level zerolog.Level, message string, err error) error {
	return AppError{
		Status:  status,
		Code:    code,
		Level:   level,
		Message: message,
		Err:     err,
	}
}

func (e AppError) Error() string {
	if e.Err != nil {
		return e.Err.Error()
	}
	return e.Message
}

func (e AppError) Unwrap() error {
	return e.Err
}
