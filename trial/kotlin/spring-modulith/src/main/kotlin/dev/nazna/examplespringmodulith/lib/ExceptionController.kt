package dev.nazna.examplespringmodulith.lib

import dev.nazna.examplespringmodulith.lib.domain.ErrorCode
import dev.nazna.examplespringmodulith.lib.domain.ErrorResponse
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatusCode
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@RestControllerAdvice
class ExceptionController : ResponseEntityExceptionHandler() {

    @ExceptionHandler(NotFoundException::class)
    fun handleNotFoundExceptionCustom(ex: NotFoundException, request: WebRequest): ResponseEntity<Any>? {
        val body = ErrorResponse(ErrorCode.E_BE_NOT_FOUND, "リソースが見つかりません message=${ex.message}")
        logger.info("${body.code} ${body.message}")
        return handleExceptionInternal(ex, body, HttpHeaders.EMPTY, HttpStatus.NOT_FOUND, request)
    }

    override fun handleMethodArgumentNotValid(
        ex: MethodArgumentNotValidException,
        headers: HttpHeaders,
        status: HttpStatusCode,
        request: WebRequest
    ): ResponseEntity<Any>? {
        val body = ErrorResponse(ErrorCode.E_BE_BAD_USER_INPUT, "入力値が不正です message=${ex.message}")
        logger.info("${body.code} ${body.message}")
        return handleExceptionInternal(ex, body, headers, status, request)
    }
}
