package dev.nazna.examplemonorepoapp.application

import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.presentation.request.UserCreateRequest

interface UserService {

  fun findById(id: Long): User

  fun create(request: UserCreateRequest): User

}
