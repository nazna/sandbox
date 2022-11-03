package dev.nazna.api.user;

import dev.nazna.api.user.handler.UserHandler;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "user-api", description = "ユーザー情報API", version = "v1"))
public class ApiUserApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiUserApplication.class, args);
  }

  @Bean
  RouterFunction<ServerResponse> routes(UserHandler userController) {
    return RouterFunctions
      .route(RequestPredicates.GET("/api/users/v1/{id}"), userController::find)
      .andRoute(RequestPredicates.POST("/api/users/v1"), userController::create);
  }

}
