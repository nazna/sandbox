package dev.nazna.examplespringmodulith.user.repository

import dev.nazna.examplespringmodulith.lib.NotFoundException
import org.springframework.stereotype.Repository
import dev.nazna.examplespringmodulith.user.domain.User as UserModel

@Repository
class UserRepository(private val queries: Queries) {

    fun findUser(id: String): UserModel {
        val entity = queries.findUser(id.toLong()) ?: throw NotFoundException("有効なユーザーが存在しません id=$id")
        return UserModel(entity.id.toString(), entity.name, entity.createdAt, entity.updatedAt)
    }
}
