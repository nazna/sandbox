package dev.nazna.routes

import dev.nazna.contollers.HealthContoller
import io.ktor.application.call
import io.ktor.locations.get
import io.ktor.response.respond
import io.ktor.routing.Routing

@Suppress("EXPERIMENTAL_API_USAGE")
fun Routing.healthRoute() {
  val healthContoller = HealthContoller()

  get<HealthContoller> { call.respond(healthContoller.index()) }
}
