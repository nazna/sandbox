use axum::{extract::Extension, http::StatusCode, response::IntoResponse, Json};
use sqlx::{query_file, query_file_as, SqlitePool};
use ulid::Ulid;
use validator::Validate;

use crate::user::model::User;

use super::model::CreateUser;

pub async fn all(Extension(pool): Extension<SqlitePool>) -> impl IntoResponse {
    let users = query_file_as!(User, "database/queries/user/select-all.sql")
        .fetch_all(&pool)
        .await
        .unwrap();

    (StatusCode::OK, Json(users))
}

pub async fn find() {
    todo!("ユーザー単体取得API 実装予定");
}

pub async fn create(
    Extension(pool): Extension<SqlitePool>,
    Json(input): Json<CreateUser>,
) -> Result<impl IntoResponse, StatusCode> {
    if input.validate().is_err() {
        tracing::warn!("入力が不正です");
        return Err(StatusCode::BAD_REQUEST);
    }

    let id = Ulid::new().to_string();

    query_file!("database/queries/user/insert.sql", id, input.nickname)
        .execute(&pool)
        .await
        .unwrap();

    let user = query_file_as!(User, "database/queries/user/select-by-id.sql", id)
        .fetch_one(&pool)
        .await
        .unwrap();

    Ok((StatusCode::CREATED, Json(user)))
}

pub async fn edit() {
    todo!("ユーザー編集API 実装予定");
}

pub async fn remove() {
    todo!("ユーザー削除API 実装予定");
}
