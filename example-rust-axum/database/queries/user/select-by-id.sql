SELECT
  id,
  nickname,
  created_at,
  updated_at,
  deleted_at,
  deleted_reason
FROM
  users
WHERE
  id = ?;
