use async_graphql::{SimpleObject, ID};

#[derive(Debug, SimpleObject)]
pub struct Task {
    pub id: ID,
    pub task_id: i64,
    pub user_id: i64,
    pub body: String,
    pub is_completed: bool,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug)]
pub struct FindTask {
    pub task_id: i64,
    pub user_id: i64,
    pub body: String,
    pub is_completed: bool,
    pub created_at: String,
    pub updated_at: String,
}

impl From<FindTask> for Task {
    fn from(t: FindTask) -> Self {
        Task {
            id: ID::from(format!("Task_{}", t.task_id)),
            task_id: t.task_id,
            user_id: t.user_id,
            body: t.body,
            is_completed: t.is_completed,
            created_at: t.created_at,
            updated_at: t.updated_at,
        }
    }
}
