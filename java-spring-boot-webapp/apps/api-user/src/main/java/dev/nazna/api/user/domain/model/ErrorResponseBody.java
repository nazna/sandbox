package dev.nazna.api.user.domain.model;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "エラー情報")
public record ErrorResponseBody(
    @Schema(description = "タイムスタンプ(UTC)", example = "2022-01-23T12:34:56.789+00:00")
        Object timestamp,
    @Schema(description = "HTTPステータスコード", example = "404") int status,
    @Schema(description = "リクエストパス", example = "/api/users/v1/999") Object path,
    @Schema(description = "エラーメッセージ", example = "User not found.") String message) {}
