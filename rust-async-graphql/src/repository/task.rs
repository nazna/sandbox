use sqlx::{Pool, Sqlite};

use crate::domain::task::{FindTask, Task};

pub async fn find(pool: &Pool<Sqlite>, task_id: i64) -> anyhow::Result<Option<Task>> {
    let find_task = sqlx::query_file_as!(FindTask, "database/task-find.sql", task_id)
        .fetch_optional(pool)
        .await?;

    match find_task {
        Some(t) => Ok(Some(Task::from(t))),
        None => Ok(None),
    }
}
