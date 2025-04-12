CREATE TABLE
  user (
    user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -- ユーザーID
    username TEXT NOT NULL, -- ユーザー名
    created_at TEXT NOT NULL DEFAULT (
      strftime ('%Y-%m-%dT%H:%M:%f+00:00', 'now', 'utc')
    ), -- 作成日時
    updated_at TEXT NOT NULL DEFAULT (
      strftime ('%Y-%m-%dT%H:%M:%f+00:00', 'now', 'utc')
    ), -- 更新日時
    CONSTRAINT username CHECK (LENGTH (username) <= 20),
    CONSTRAINT created_at CHECK (
      created_at REGEXP '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}[-+][0-9]{2}:[0-9]{2}'
    ),
    CONSTRAINT updated_at CHECK (
      updated_at REGEXP '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}[-+][0-9]{2}:[0-9]{2}'
    )
  );

CREATE TABLE
  task (
    task_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -- タスクID
    user_id INTEGER NOT NULL, -- ユーザーID
    body TEXT NOT NULL, -- タスク本文
    is_completed BOOLEAN NOT NULL DEFAULT FALSE, -- タスクが完了しているか
    created_at TEXT NOT NULL DEFAULT (
      strftime ('%Y-%m-%dT%H:%M:%f+00:00', 'now', 'utc')
    ), -- 作成日時
    updated_at TEXT NOT NULL DEFAULT (
      strftime ('%Y-%m-%dT%H:%M:%f+00:00', 'now', 'utc')
    ), -- 更新日時
    CONSTRAINT body CHECK (LENGTH (body) <= 140),
    CONSTRAINT is_completed CHECK (is_completed IN (FALSE, TRUE)),
    CONSTRAINT created_at CHECK (
      created_at REGEXP '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}[-+][0-9]{2}:[0-9]{2}'
    ),
    CONSTRAINT updated_at CHECK (
      updated_at REGEXP '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}[-+][0-9]{2}:[0-9]{2}'
    )
  );
