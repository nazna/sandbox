package dev.nazna.api.user.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.server.ResponseStatusException;

public class BadRequestException extends ResponseStatusException {

  private final String message;

  public BadRequestException(@NonNull String message) {
    super(HttpStatus.BAD_REQUEST, message);
    this.message = message;
  }

  @NonNull
  public String getMessage() {
    return message;
  }

}
