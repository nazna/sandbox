package domain

import (
	"fmt"
	"net/http"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type errorCode struct {
	code   string
	status uint16
	level  zapcore.Level
}

var ErrorCode = struct {
	Unexpected   errorCode
	BadRequest   errorCode
	UserNotFound errorCode
}{
	Unexpected:   errorCode{code: "UNKNOWN", status: http.StatusInternalServerError, level: zap.ErrorLevel},
	BadRequest:   errorCode{code: "BAD_REQUEST", status: http.StatusBadRequest, level: zap.WarnLevel},
	UserNotFound: errorCode{code: "USER_NOT_FOUND", status: http.StatusNotFound, level: zap.InfoLevel},
}

func (v *errorCode) Code() string {
	return v.code
}

func (v *errorCode) Status() uint16 {
	return v.status
}

func (v *errorCode) Level() zapcore.Level {
	return v.level
}

type ApplicationError struct {
	Code errorCode
	Msg  string
}

func (e ApplicationError) Error() string {
	return fmt.Sprintf("[%s] code=%s status=%d msg=%s", e.Code.level, e.Code.code, e.Code.status, e.Msg)
}
