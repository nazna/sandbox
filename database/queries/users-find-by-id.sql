-- name: SelectUserById :one
SELECT
  id,
  name,
  created_at,
  updated_at,
  deleted_at,
  deleted_reason
FROM
  users
WHERE
  id = ?;
