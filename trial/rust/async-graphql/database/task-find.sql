SELECT
  task_id,
  user_id,
  body,
  is_completed,
  created_at,
  updated_at
FROM
  task
WHERE
  task_id = ?
LIMIT
  1;
