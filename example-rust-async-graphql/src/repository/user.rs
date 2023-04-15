use sqlx::{Pool, Sqlite};

use crate::domain::user::{FindUser, User};

pub async fn find(pool: &Pool<Sqlite>, user_id: i64) -> anyhow::Result<Option<User>> {
    let find_user = sqlx::query_file_as!(FindUser, "database/user-find.sql", user_id)
        .fetch_optional(pool)
        .await?;

    match find_user {
        Some(u) => Ok(Some(User::from(u))),
        None => Ok(None),
    }
}
