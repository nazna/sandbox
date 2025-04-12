use axum::{http::StatusCode, response::IntoResponse, Json};

use super::model::Task;

pub async fn all() -> impl IntoResponse {
    let task = Task {
        id: "1".to_string(),
        title: "Buy a coffee".to_string(),
    };

    (StatusCode::OK, Json(task))
}

pub async fn find() {
    todo!("タスク単体取得API 実装予定");
}

pub async fn create() {
    todo!("タスク作成API 実装予定");
}

pub async fn edit() {
    todo!("タスク編集API 実装予定");
}

pub async fn remove() {
    todo!("タスク削除API 実装予定");
}
