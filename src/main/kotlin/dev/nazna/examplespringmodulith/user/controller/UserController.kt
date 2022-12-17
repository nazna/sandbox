package dev.nazna.examplespringmodulith.user.controller

import dev.nazna.examplespringmodulith.user.domain.User
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
@Tag(name = "ユーザーAPI")
class UserController {

    companion object {
        private const val CURRENT_VERSION = 1
        private val logger = LoggerFactory.getLogger(this::class.java)
    }

    @Operation(operationId = "user-find", summary = "Find User", description = "ユーザーを単体取得します")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                content = [Content(schema = Schema(implementation = User::class))]
            )
        ]
    )
    @GetMapping("/v$CURRENT_VERSION/{id}")
    fun find(@PathVariable id: String): ResponseEntity<User> {
        return ResponseEntity.ok().body(User("1", "alma", null, null))
    }

    @Operation(operationId = "user-create", summary = "Create User", description = "ユーザーを作成します")
    @ApiResponses(
        value = [ApiResponse(
            responseCode = "200",
            content = [Content(schema = Schema(implementation = User::class))]
        )]
    )
    @PostMapping("/v$CURRENT_VERSION/{id}")
    fun create(@PathVariable id: String, @RequestBody body: UserRequestCreate): ResponseEntity<User> {
        logger.info(body.toString())
        return ResponseEntity.ok().body(User("1", body.name, null, null))
    }

    @Operation(operationId = "user-edit", summary = "Edit User", description = "ユーザーを編集します")
    @ApiResponses(
        value = [ApiResponse(
            responseCode = "200",
            content = [Content(schema = Schema(implementation = User::class))]
        )]
    )
    @PutMapping("/v$CURRENT_VERSION/{id}")
    fun edit(@PathVariable id: String): ResponseEntity<User> {
        return ResponseEntity.ok().body(User("1", "alma", null, null))
    }

    @Operation(operationId = "user-delete", summary = "Delete User", description = "ユーザーを削除します")
    @ApiResponses(
        value = [ApiResponse(
            responseCode = "200",
            content = [Content(schema = Schema(implementation = User::class))]
        )]
    )
    @DeleteMapping("/v$CURRENT_VERSION/{id}")
    fun delete(@PathVariable id: String): ResponseEntity<User> {
        return ResponseEntity.ok().body(User("1", "alma", null, null))
    }
}
