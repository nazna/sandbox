package dev.nazna.api.user.domain.dto;

import dev.nazna.api.user.domain.exception.BadRequestException;

import static java.util.Objects.isNull;

public record UserCreateRequest(String name) {

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
