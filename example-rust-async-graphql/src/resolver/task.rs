use async_graphql::{Context, Object};
use sqlx::{Pool, Sqlite};

use crate::{domain::task::Task, repository};

#[derive(Default)]
pub struct TaskQuery {}

#[Object]
impl TaskQuery {
    async fn task(&self, ctx: &Context<'_>, task_id: i64) -> anyhow::Result<Option<Task>> {
        let pool = ctx.data_unchecked::<Pool<Sqlite>>();
        repository::task::find(pool, task_id).await
    }
}
