package dev.nazna.examplemonorepoapp.presentation.controller

import dev.nazna.examplemonorepoapp.application.UserService
import dev.nazna.examplemonorepoapp.domain.model.User
import dev.nazna.examplemonorepoapp.presentation.request.UserCreateRequest
import dev.nazna.examplemonorepoapp.presentation.request.UserSearchRequest
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/users")
class UserController(private val userService: UserService) {

  companion object {
    val logger: Logger = LoggerFactory.getLogger(this::class.java)
  }

  @GetMapping("/{id}")
  fun find(@PathVariable id: Long): ResponseEntity<User> {
    logger.info("GET /api/v1/users/${id}")
    return ResponseEntity.ok().body(userService.findById(id))
  }

  @GetMapping("/search")
  fun search(@RequestParam request: UserSearchRequest): ResponseEntity<String> {
    return ResponseEntity.ok().body("Searched")
  }

  @PostMapping
  fun create(@Validated @RequestBody request: UserCreateRequest): ResponseEntity<User> {
    logger.info("POST /api/v1/users request=${request}")
    // TODO: Response with status code 201 Created
    return ResponseEntity.ok().body(userService.create(request))
  }

  @DeleteMapping("/{id}")
  fun delete(@PathVariable id: String): ResponseEntity<String> {
    return ResponseEntity.ok().body("Deleted")
  }

}
