package dev.nazna.examplemonorepoapp.domain.exception

import java.lang.RuntimeException

class InternalServerErrorException(override val message: String?) : RuntimeException(message)
