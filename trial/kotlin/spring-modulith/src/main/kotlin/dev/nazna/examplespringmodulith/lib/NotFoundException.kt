package dev.nazna.examplespringmodulith.lib

class NotFoundException(override val message: String?) : RuntimeException(message)
