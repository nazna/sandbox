package dev.nazna.examplespringbackend;

import org.mapstruct.extensions.spring.SpringMapperConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@SpringMapperConfig
public class ExampleSpringBackendApplication {

  public static void main(final String[] args) {
    SpringApplication.run(ExampleSpringBackendApplication.class, args);
  }

}
