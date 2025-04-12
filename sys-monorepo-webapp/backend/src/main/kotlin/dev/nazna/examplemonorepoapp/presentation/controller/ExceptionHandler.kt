package dev.nazna.examplemonorepoapp.presentation.controller

import dev.nazna.examplemonorepoapp.domain.exception.NotFoundException
import dev.nazna.examplemonorepoapp.domain.model.ErrorResponse
import dev.nazna.examplemonorepoapp.domain.value.ErrorCode
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@RestControllerAdvice
class ExceptionHandler : ResponseEntityExceptionHandler() {

  @ExceptionHandler(NotFoundException::class)
  fun handleNotFoundException(
    ex: NotFoundException,
    headers: HttpHeaders,
    status: HttpStatus
  ): ResponseEntity<ErrorResponse> {
    val body = ErrorResponse(ErrorCode.E_BE_NOT_FOUND, "リソースが見つかりません message=${ex.message}")
    logger.info("${body.code} ${body.message}")
    return ResponseEntity(body, headers, status)
  }

  override fun handleMethodArgumentNotValid(
    ex: MethodArgumentNotValidException,
    headers: HttpHeaders,
    status: HttpStatus,
    request: WebRequest
  ): ResponseEntity<Any> {
    val body = ErrorResponse(ErrorCode.E_BE_BAD_USER_INPUT, "入力値が不正です message=${ex.message}")
    logger.info("${body.code} ${body.message}")
    return ResponseEntity(body, headers, status)
  }

}
