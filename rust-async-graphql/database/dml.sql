INSERT INTO
  user (username)
VALUES
  ("alma"),
  ("alice"),
  ("belle");

INSERT INTO
  task (user_id, body, is_completed)
VALUES
  (1, "Buy a coffee", true),
  (1, "Buy a knife", false);
