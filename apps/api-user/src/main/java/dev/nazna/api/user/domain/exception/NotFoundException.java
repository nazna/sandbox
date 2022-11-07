package dev.nazna.api.user.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.server.ResponseStatusException;

public class NotFoundException extends ResponseStatusException {

  @NonNull private final String message;

  public NotFoundException(@NonNull String message) {
    super(HttpStatus.NOT_FOUND, message);
    this.message = message;
  }

  @NonNull
  public String getMessage() {
    return this.message;
  }
}
