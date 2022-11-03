package dev.nazna.api.user.domain.dto;

import dev.nazna.api.user.domain.exception.BadRequestException;
import io.swagger.v3.oas.annotations.media.Schema;

import static java.util.Objects.isNull;

@Schema(description = "ユーザー単体作成リクエスト")
public record UserCreateRequest(@Schema(description = "ユーザー名", required = true, example = "alma") String name) {

  public UserCreateRequest {
    this.validate(name);
  }

  private void validate(String name) {
    if (isNull(name)) {
      throw new BadRequestException("name must not be null. name=null");
    }

    if (name.length() > 32) {
      throw new BadRequestException(String.format("name must be shorter than or equal to 32. name=%s", name));
    }
  }

}
