package dev.nazna.examplemonorepoapp.application.impl

import dev.nazna.examplemonorepoapp.application.UserService
import org.springframework.stereotype.Service

@Service
class UserServiceImpl: UserService {

  override fun findById(id: String): String {
    return "Hello, world!"
  }

}
