package dev.nazna.examplemonorepoapp.presentation.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/operation")
class OperationController {

  @GetMapping
  fun ok(): ResponseEntity<String> {
    return ResponseEntity.ok().body("operation")
  }

}
