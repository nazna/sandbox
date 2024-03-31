package dev.nazna.examplemonorepoapp.application

import dev.nazna.examplemonorepoapp.domain.model.Task

interface TaskService {
  fun findById(id: String): Task
}
