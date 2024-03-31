package dev.nazna.api.user;

import static org.springframework.web.reactive.function.server.RequestPredicates.accept;

import dev.nazna.api.user.handler.UserHandler;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.annotations.RouterOperation;
import org.springdoc.core.annotations.RouterOperations;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMethod;
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
  @RouterOperations({
    @RouterOperation(
        path = "/api/users/v1/{id}",
        method = RequestMethod.GET,
        beanMethod = "find",
        beanClass = UserHandler.class),
    @RouterOperation(
        path = "/api/users/v1",
        method = RequestMethod.POST,
        beanMethod = "create",
        beanClass = UserHandler.class)
  })
  RouterFunction<ServerResponse> routes(UserHandler userHandler) {
    return RouterFunctions.route(
            RequestPredicates.GET("/api/users/v1/{id}").and(accept(MediaType.APPLICATION_JSON)),
            userHandler::find)
        .andRoute(
            RequestPredicates.POST("/api/users/v1").and(accept(MediaType.APPLICATION_JSON)),
            userHandler::create);
  }
}
