package dev.nazna.examplemonorepoapp.domain.entity

import org.jetbrains.exposed.dao.id.LongIdTable
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.javatime.datetime

object UsersTable : LongIdTable("users", "user_id") {
  val name = varchar("name", 16)
  val createdAt = datetime("created_at")
  val updatedAt = datetime("updated_at")
  val deletedAt = datetime("deleted_at")
  val deletedReason = varchar("deleted_reason", 64)
}
