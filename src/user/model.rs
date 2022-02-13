use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize)]
pub struct User {
    pub id: String,
    pub nickname: String,
    pub created_at: String,
    pub updated_at: String,
    pub deleted_at: Option<String>,
    pub deleted_reason: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct CreateUser {
    pub nickname: String,
}
