package dev.nazna.examplespringbackend.presentation.controller;

import dev.nazna.examplespringbackend.application.UserService;
import dev.nazna.examplespringbackend.domain.User;
import dev.nazna.examplespringbackend.presentation.request.UserCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @GetMapping("/{id}")
  ResponseEntity<User> find(@PathVariable Long id) {
    return ResponseEntity.ok().body(userService.find(id));
  }

  @PostMapping
  ResponseEntity<User> create(@Validated @RequestBody UserCreateRequest request) {
    return ResponseEntity.ok().body(userService.create(request));
  }

}
