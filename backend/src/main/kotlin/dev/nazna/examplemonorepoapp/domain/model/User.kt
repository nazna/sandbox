package dev.nazna.examplemonorepoapp.domain.model

import java.time.LocalDateTime

data class User(
  val id: Long,
  val name: String,
  val createdAt: LocalDateTime,
  val updatedAt: LocalDateTime,
  val deletedAt: LocalDateTime,
  val deletedReason: String
)
