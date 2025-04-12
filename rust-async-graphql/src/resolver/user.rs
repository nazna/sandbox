use async_graphql::{Context, Object};
use sqlx::{Pool, Sqlite};

use crate::{domain::user::User, repository};

#[derive(Default)]
pub struct UserQuery {}

#[Object]
impl UserQuery {
    async fn user(&self, ctx: &Context<'_>, user_id: i64) -> anyhow::Result<Option<User>> {
        let pool = ctx.data_unchecked::<Pool<Sqlite>>();
        repository::user::find(pool, user_id).await
    }
}
