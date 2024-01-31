// Code generated by sqlc. DO NOT EDIT.

package persistence

import (
	"database/sql"
	"time"
)

type User struct {
	ID            int32
	Name          string
	CreatedAt     time.Time
	UpdatedAt     time.Time
	DeletedAt     sql.NullTime
	DeletedReason sql.NullString
}
