package dev.nazna.contollers

import io.ktor.locations.Location
import kotlinx.serialization.Serializable

@Suppress("EXPERIMENTAL_API_USAGE")
@Location("/health")
class HealthContoller {
  @Serializable
  data class Health(val status: String)

  fun index(): Health {
    return Health(status = "ok")
  }
}
