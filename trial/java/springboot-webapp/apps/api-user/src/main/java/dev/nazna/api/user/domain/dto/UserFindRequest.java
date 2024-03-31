package dev.nazna.api.user.domain.dto;

import static java.util.Objects.isNull;

import dev.nazna.api.user.domain.exception.BadRequestException;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "ユーザー単体取得リクエスト")
public record UserFindRequest(
    @Schema(description = "ユーザーID", required = true, example = "1") String id) {

  public UserFindRequest {
    this.validate(id);
  }

  private void validate(String id) {
    if (isNull(id)) {
      throw new BadRequestException("id must not be null. id=null");
    }

    try {
      Integer.parseInt(id);
    } catch (NumberFormatException ex) {
      throw new BadRequestException(String.format("id must be a number. id=%s", id));
    }
  }
}
