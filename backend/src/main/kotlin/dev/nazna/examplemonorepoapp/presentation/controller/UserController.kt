package dev.nazna.examplemonorepoapp.presentation.controller

import dev.nazna.examplemonorepoapp.application.UserService
import dev.nazna.examplemonorepoapp.domain.model.User
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/users")
class UserController(private val userService: UserService) {

  @GetMapping("/{id}")
  fun find(@PathVariable id: String): ResponseEntity<User> {
    return ResponseEntity.ok().body(userService.findById(id))
  }

}
