package dev.nazna.examplemonorepoapp.domain.repository

import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.presentation.request.UserCreateRequest

interface UserRepository {

  fun findById(id: Long): User?

  fun create(name: String): User?

}
