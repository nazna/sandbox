package dev.nazna.examplemonorepoapp.application

import dev.nazna.examplemonorepoapp.domain.model.User

interface UserService {
  fun findById(id: Long): User
}
