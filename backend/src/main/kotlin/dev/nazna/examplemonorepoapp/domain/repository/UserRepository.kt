package dev.nazna.examplemonorepoapp.domain.repository

import dev.nazna.examplemonorepoapp.domain.model.User

interface UserRepository {

  fun findById(id: Long): User

}
