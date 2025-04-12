SELECT
  user_id,
  username,
  created_at,
  updated_at
FROM
  user
WHERE
  user_id = ?
LIMIT
  1;
