package dev.nazna.api.user.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.server.ResponseStatusException;

public class InternalServerErrorException extends ResponseStatusException {

  private final String message;

  public InternalServerErrorException(@NonNull String message) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
    this.message = message;
  }

  @NonNull
  public String getMessage() {
    return message;
  }
}
