SELECT /*%expand*/*
FROM user
WHERE user_id = /* userId */1
  AND deleted_at IS NULL;
