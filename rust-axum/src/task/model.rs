use serde::Serialize;

#[derive(Serialize)]
pub struct Task {
    pub id: String,
    pub title: String,
}
