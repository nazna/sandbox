mod task;
mod user;

use axum::{routing::get, AddExtensionLayer, Router};
use dotenv::dotenv;
use sqlx::sqlite::SqlitePoolOptions;
use std::{net::SocketAddr, time::Duration};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv().ok();
    tracing_subscriber::fmt::init();

    let pool = SqlitePoolOptions::new()
        .max_connections(1)
        .connect_timeout(Duration::from_secs(1))
        .connect(&std::env::var("DATABASE_URL")?)
        .await?;

    let app = Router::new()
        .route(
            "/api/v1/users",
            get(user::handler::all).post(user::handler::create),
        )
        .route(
            "/api/v1/users/:id",
            get(user::handler::find)
                .put(user::handler::edit)
                .delete(user::handler::remove),
        )
        .route(
            "/api/v1/tasks",
            get(task::handler::all).post(task::handler::create),
        )
        .route(
            "/api/v1/tasks/:id",
            get(task::handler::find)
                .put(task::handler::edit)
                .delete(task::handler::remove),
        )
        .layer(AddExtensionLayer::new(pool));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::debug!("Server is running on {}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await?;

    Ok(())
}
