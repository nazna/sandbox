use async_graphql::{SimpleObject, ID};

#[derive(Debug, SimpleObject)]
pub struct User {
    pub id: ID,
    pub user_id: i64,
    pub username: String,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug)]
pub struct FindUser {
    pub user_id: i64,
    pub username: String,
    pub created_at: String,
    pub updated_at: String,
}

impl From<FindUser> for User {
    fn from(u: FindUser) -> Self {
        User {
            id: ID::from(format!("User_{}", u.user_id)),
            user_id: u.user_id,
            username: u.username,
            created_at: u.created_at,
            updated_at: u.updated_at,
        }
    }
}
