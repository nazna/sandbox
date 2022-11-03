package dev.nazna.api.user.domain.model;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "ユーザー情報")
public record User(@Schema(description = "ユーザーID", example = "1") Long id,
                   @Schema(description = "ユーザー名", example = "alma") String name) {
}
