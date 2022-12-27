package dev.nazna.examplespringmodulith

import org.junit.jupiter.api.Test
import org.springframework.modulith.docs.Documenter
import org.springframework.modulith.model.ApplicationModules

class ExampleSpringModulithApplicationTests {

    private val modules = ApplicationModules.of(Application::class.java)

    @Test
    fun verifyModularity() {
        modules.verify()
    }

    @Test
    fun createModuleDocumentation() {
        Documenter(modules).writeDocumentation()
    }
}
