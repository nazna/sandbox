package dev.nazna.examplemonorepoapp.application.impl

import dev.nazna.examplemonorepoapp.application.TaskService
import dev.nazna.examplemonorepoapp.domain.model.Task
import org.springframework.stereotype.Service

@Service
class TaskServiceImpl: TaskService {

  override fun findById(id: String): Task {
    return Task("1", "say hello")
  }

}
