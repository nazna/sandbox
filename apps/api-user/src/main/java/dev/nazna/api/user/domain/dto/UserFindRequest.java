package dev.nazna.api.user.domain.dto;

import dev.nazna.api.user.domain.exception.BadRequestException;

import static java.util.Objects.isNull;

public record UserFindRequest(String id) {

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
