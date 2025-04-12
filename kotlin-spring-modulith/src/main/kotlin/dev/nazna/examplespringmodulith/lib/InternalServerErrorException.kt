package dev.nazna.examplespringmodulith.lib

class InternalServerErrorException(override val message: String?) : RuntimeException(message)
