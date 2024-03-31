package dev.nazna.examplemonorepoapp.infrastructure.repository

import dev.nazna.examplemonorepoapp.domain.entity.UsersTable
import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.domain.repository.UserRepository
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository

@Repository
class UserRepositoryImpl : UserRepository {

  override fun findById(id: Long): User? {
    return transaction {
      UsersTable
        .select { UsersTable.id eq id }
        .firstOrNull()?.toUser()
    }
  }

  override fun create(name: String): User? {
    val id = transaction {
      UsersTable.insertAndGetId {
        it[UsersTable.name] = name
      }
    }

    return this.findById(id.value)
  }

  private fun ResultRow.toUser(): User {
    return User(
      this[UsersTable.id].value,
      this[UsersTable.name],
      this[UsersTable.createdAt],
      this[UsersTable.updatedAt],
      this[UsersTable.deletedAt],
      this[UsersTable.deletedReason],
    )
  }

}
