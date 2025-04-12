use async_graphql::{EmptyMutation, EmptySubscription, MergedObject, Schema};

use self::{node::NodeQuery, task::TaskQuery, user::UserQuery};

pub mod node;
pub mod task;
pub mod user;

#[derive(MergedObject, Default)]
pub struct Query(NodeQuery, TaskQuery, UserQuery);

pub type GraphQLSchema = Schema<Query, EmptyMutation, EmptySubscription>;
