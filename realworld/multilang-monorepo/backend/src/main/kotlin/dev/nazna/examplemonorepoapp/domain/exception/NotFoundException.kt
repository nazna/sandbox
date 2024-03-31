package dev.nazna.examplemonorepoapp.domain.exception

class NotFoundException(override val message: String?) : RuntimeException(message)
