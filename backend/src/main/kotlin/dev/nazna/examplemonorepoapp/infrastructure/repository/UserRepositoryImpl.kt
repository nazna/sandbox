package dev.nazna.examplemonorepoapp.infrastructure.repository

import dev.nazna.examplemonorepoapp.domain.entity.UsersTable
import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.domain.repository.UserRepository
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Repository

@Repository
class UserRepositoryImpl : UserRepository {

  override fun findById(id: Long): User? {
    return UsersTable
      .select { UsersTable.userId eq id }
      .firstOrNull()?.toUser()
  }

  private fun ResultRow.toUser(): User {
    return User(
      this[UsersTable.userId],
      this[UsersTable.name],
      this[UsersTable.createdAt],
      this[UsersTable.updatedAt],
      this[UsersTable.deletedAt],
      this[UsersTable.deletedReason],
    )
  }

}
