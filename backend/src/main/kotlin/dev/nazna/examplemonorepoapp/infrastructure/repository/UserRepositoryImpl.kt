package dev.nazna.examplemonorepoapp.infrastructure.repository

import dev.nazna.examplemonorepoapp.domain.entity.UserTable
import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.domain.repository.UserRepository
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Repository

@Repository
class UserRepositoryImpl : UserRepository {

  override fun findById(id: Long): User? {
    return UserTable
      .select { UserTable.userId eq id }
      .firstOrNull()?.toUser()
  }

  private fun ResultRow.toUser(): User {
    return User(
      this[UserTable.userId],
      this[UserTable.name],
      this[UserTable.createdAt],
      this[UserTable.updatedAt],
      this[UserTable.deletedAt],
      this[UserTable.deletedReason],
    )
  }

}
