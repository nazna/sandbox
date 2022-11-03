package dev.nazna.api.user.handler;

import dev.nazna.api.user.domain.dto.UserCreateRequest;
import dev.nazna.api.user.domain.dto.UserFindRequest;
import dev.nazna.api.user.domain.model.User;
import dev.nazna.api.user.usecase.UserUsecase;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class UserHandler {

  private final UserUsecase usecase;

  public UserHandler(UserUsecase usecase) {
    this.usecase = usecase;
  }

  @Operation(
    operationId = "user-find",
    summary = "ユーザー単体取得",
    description = "ユーザーIDを指定して1人のユーザー情報を取得します",
    parameters = {@Parameter(name = "id", description = "ユーザーID", in = ParameterIn.PATH)},
    responses = @ApiResponse(responseCode = "200", content = @Content(schema = @Schema(implementation = User.class))))
  public Mono<ServerResponse> find(ServerRequest request) {
    var dto = new UserFindRequest(request.pathVariable("id"));
    var user = usecase.find(dto);

    return user.flatMap(u -> ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .bodyValue(u));
  }

  @Operation(
    operationId = "user-create",
    description = "ユーザー単体作成",
    summary = "ユーザーを1人作成します",
    requestBody = @RequestBody(required = true, content = @Content(schema = @Schema(implementation = UserCreateRequest.class))),
    responses = @ApiResponse(responseCode = "200", content = @Content(schema = @Schema(implementation = User.class))))
  public Mono<ServerResponse> create(ServerRequest request) {
    var dto = request.bodyToMono(UserCreateRequest.class);
    var user = dto.flatMap(usecase::create);

    return user.flatMap(u -> ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .bodyValue(u));
  }

}
