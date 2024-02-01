package dev.nazna.examplemonorepoapp.domain.model

import dev.nazna.examplemonorepoapp.domain.value.ErrorCode

data class ErrorResponse(
  val code: ErrorCode,
  val message: String,
)
