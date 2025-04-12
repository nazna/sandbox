package dev.nazna.examplespringmodulith.user.usecase

import dev.nazna.examplespringmodulith.user.domain.User
import dev.nazna.examplespringmodulith.user.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserFind(private val repository: UserRepository) {

    fun execute(id: String): User {
        return repository.findUser(id)
    }
}
