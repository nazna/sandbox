package dev.nazna

import dev.nazna.routes.booksRoute
import dev.nazna.routes.healthRoute
import io.ktor.application.install
import io.ktor.features.ContentNegotiation
import io.ktor.locations.Locations
import io.ktor.routing.Routing
import io.ktor.serialization.json
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.serialization.json.Json

fun main() {
  embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
    install(ContentNegotiation) {
      json(
        Json {
          prettyPrint = true
        }
      )
    }

    install(Locations)

    install(Routing) {
      booksRoute()
      healthRoute()
    }
  }.start(wait = true)
}
