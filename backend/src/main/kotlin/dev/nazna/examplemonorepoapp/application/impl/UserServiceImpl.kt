package dev.nazna.examplemonorepoapp.application.impl

import dev.nazna.examplemonorepoapp.application.UserService
import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.domain.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserServiceImpl(private val userRepository: UserRepository) : UserService {

  override fun findById(id: Long): User {
    return userRepository.findById(id)
  }

}
