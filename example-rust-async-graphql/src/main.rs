use std::{net::SocketAddr, str::FromStr};

use async_graphql::{EmptyMutation, EmptySubscription, Schema};
use axum::{routing::get, Extension, Router};
use sqlx::{sqlite::SqliteConnectOptions, ConnectOptions, SqlitePool};
use tracing::{info, Level};

use crate::{domain::node::Node, resolver::Query, setting::Setting};

mod domain;
mod repository;
mod resolver;
mod router;
mod setting;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt().with_max_level(Level::INFO).init();

    let settings = Setting::new()?;

    let options = SqliteConnectOptions::from_str(&settings.database.url)
        .unwrap()
        .disable_statement_logging()
        .clone();
    let pool = SqlitePool::connect_with(options).await?;

    let schema = Schema::build(Query::default(), EmptyMutation, EmptySubscription)
        .data(pool)
        .register_output_type::<Node>()
        .finish();

    let app = Router::new()
        .route("/", get(router::graphiql_handler).post(router::graphql_handler))
        .layer(Extension(schema));

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    info!("Server is running on http://localhost:8080");

    axum::Server::bind(&addr).serve(app.into_make_service()).await?;

    Ok(())
}
