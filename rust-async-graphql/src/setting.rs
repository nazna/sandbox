use std::env;

use config::{Config, File};
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Database {
    pub url: String,
}

#[derive(Debug, Deserialize)]
pub struct Setting {
    pub database: Database,
}

impl Setting {
    pub fn new() -> anyhow::Result<Self> {
        let profile = env::var("PROFILE").unwrap_or("local".to_string());

        let loaded = Config::builder()
            .add_source(File::with_name(&format!("./config/{}", profile)))
            .build()?;

        let setting = loaded.try_deserialize()?;

        Ok(setting)
    }
}
