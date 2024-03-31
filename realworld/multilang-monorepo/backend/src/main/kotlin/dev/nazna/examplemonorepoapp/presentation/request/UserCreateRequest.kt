package dev.nazna.examplemonorepoapp.presentation.request

import kotlinx.serialization.Serializable
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Serializable
data class UserCreateRequest(
  @field:NotBlank
  @field:Size(max = 32)
  val name: String
)
