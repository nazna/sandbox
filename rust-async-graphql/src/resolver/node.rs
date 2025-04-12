use async_graphql::{Context, Object, ID};
use sqlx::{Pool, Sqlite};

use crate::{domain::node::Node, repository};

#[derive(Default)]
pub struct NodeQuery {}

#[Object]
impl NodeQuery {
    async fn node(&self, ctx: &Context<'_>, id: ID) -> anyhow::Result<Option<Node>> {
        let pool = ctx.data_unchecked::<Pool<Sqlite>>();

        let (obj_type, obj_id) = id.split_once('_').map(|(x, y)| (x, y.parse::<i64>().unwrap())).unwrap();

        match obj_type {
            "Task" => {
                let task = repository::task::find(pool, obj_id).await?;

                match task {
                    Some(t) => Ok(Some(Node::Task(t))),
                    None => Ok(None),
                }
            }
            "User" => {
                let user = repository::user::find(pool, obj_id).await?;

                match user {
                    Some(u) => Ok(Some(Node::User(u))),
                    None => Ok(None),
                }
            }
            _ => Ok(None),
        }
    }
}
