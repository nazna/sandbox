package dev.nazna.examplemonorepoapp.presentation.controller

import dev.nazna.examplemonorepoapp.application.TaskService
import dev.nazna.examplemonorepoapp.domain.model.Task
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/tasks")
class TaskController(private val taskService: TaskService) {

  @GetMapping("/{id}")
  fun find(@PathVariable id: String): ResponseEntity<Task> {
    return ResponseEntity.ok().body(taskService.findById(id))
  }

}
