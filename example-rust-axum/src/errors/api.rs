use axum::{
    http::StatusCode,
    response::{IntoResponse, Json, Response},
};
use serde::Serialize;

#[derive(Debug, Serialize)]
struct ApiErrorBody {
    status: u16,
    message: String,
}

#[derive(Debug)]
pub enum ApiError {
    BadRequest,
    NotFound,
}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            ApiError::BadRequest => (StatusCode::BAD_REQUEST, "Request is invalid."),
            ApiError::NotFound => (StatusCode::NOT_FOUND, "Resource not found."),
        };

        let body = Json(ApiErrorBody {
            status: status.as_u16(),
            message: message.to_string(),
        });

        (status, body).into_response()
    }
}
