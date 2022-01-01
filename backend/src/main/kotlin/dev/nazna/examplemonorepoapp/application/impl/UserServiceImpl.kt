package dev.nazna.examplemonorepoapp.application.impl

import dev.nazna.examplemonorepoapp.application.UserService
import dev.nazna.examplemonorepoapp.domain.model.User
import org.springframework.stereotype.Service

@Service
class UserServiceImpl: UserService {

  override fun findById(id: String): User {
    return User("John")
  }

}
