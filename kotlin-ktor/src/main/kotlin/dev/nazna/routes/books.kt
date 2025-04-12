package dev.nazna.routes

import dev.nazna.contollers.BooksContoller
import dev.nazna.contollers.BooksContoller.BookInput
import io.ktor.application.call
import io.ktor.locations.get
import io.ktor.response.respond
import io.ktor.routing.Routing

@Suppress("EXPERIMENTAL_API_USAGE")
fun Routing.booksRoute() {
  val booksContoller = BooksContoller()

  get<BookInput> { input -> call.respond(booksContoller.get(input)) }
}
