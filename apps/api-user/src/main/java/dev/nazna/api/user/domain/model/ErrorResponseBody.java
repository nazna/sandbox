package dev.nazna.api.user.domain.model;

public record ErrorResponseBody(Object timestamp, int status, Object path, String message) {
}
