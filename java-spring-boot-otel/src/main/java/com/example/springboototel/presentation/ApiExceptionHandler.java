package com.example.springboototel.presentation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiExceptionHandler {

  private static final Logger logger = LoggerFactory.getLogger(ApiExceptionHandler.class);

  @ExceptionHandler(Throwable.class)
  public ResponseEntity<String> exceptionHandler(Throwable err) {
    logger.info(err.getMessage());
    return ResponseEntity.internalServerError().body("500 - Internal Server Error");
  }
}
