use async_graphql::{Interface, ID};

use super::{task::Task, user::User};

#[derive(Interface)]
#[graphql(field(name = "id", type = "&ID"))]
pub enum Node {
    Task(Task),
    User(User),
}
