PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id             TEXT NOT NULL PRIMARY KEY,
  nickname       TEXT NOT NULL,
  created_at     TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at     TEXT NULL     DEFAULT NULL,
  deleted_reason TEXT NULL     DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id             TEXT NOT NULL PRIMARY KEY,
  body           TEXT NOT NULL,
  user_id        TEXT NOT NULL,
  created_at     TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at     TEXT NULL     DEFAULT NULL,
  deleted_reason TEXT NULL     DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TRIGGER trigger_users_updated_at AFTER UPDATE ON users
BEGIN
  UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE rowid = new.rowid;
END;

CREATE TRIGGER trigger_tasks_updated_at AFTER UPDATE ON tasks
BEGIN
  UPDATE tasks SET updated_at = CURRENT_TIMESTAMP WHERE rowid = new.rowid;
END;
