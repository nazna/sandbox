package dev.nazna.api.user.handler;

import dev.nazna.api.user.domain.dto.UserCreateRequest;
import dev.nazna.api.user.domain.dto.UserFindRequest;
import dev.nazna.api.user.usecase.UserUsecase;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Controller
public class UserHandler {

  private final UserUsecase usecase;

  public UserHandler(UserUsecase usecase) {
    this.usecase = usecase;
  }

  public Mono<ServerResponse> find(ServerRequest request) {
    var dto = new UserFindRequest(request.pathVariable("id"));
    var user = usecase.find(dto);

    return user.flatMap(u -> ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .bodyValue(u));
  }

  public Mono<ServerResponse> create(ServerRequest request) {
    var dto = request.bodyToMono(UserCreateRequest.class);
    var user = dto.flatMap(usecase::create);

    return user.flatMap(u -> ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .bodyValue(u));
  }

}
