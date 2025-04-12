package dev.nazna.examplespringmodulith

import io.swagger.v3.oas.annotations.OpenAPIDefinition
import io.swagger.v3.oas.annotations.info.Info
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@OpenAPIDefinition(
    info =
    Info(
        title = "ExampleSpringModulith API",
        description = "ExampleSpringModulithバックエンドAPIのI/F仕様書",
        version = "v1"
    )
)
@SpringBootApplication
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
