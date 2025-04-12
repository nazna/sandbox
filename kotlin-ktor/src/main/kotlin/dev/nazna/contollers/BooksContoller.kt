package dev.nazna.contollers

import io.ktor.locations.Location
import kotlinx.serialization.Serializable

@Suppress("EXPERIMENTAL_API_USAGE")
@Location("books")
class BooksContoller {
  @Location("{id}")
  data class BookInput(val id: String)

  @Serializable
  data class Book(val id: String, val title: String)

  fun get(input: BookInput): Book {
    return Book(input.id, "Hello, title")
  }
}
