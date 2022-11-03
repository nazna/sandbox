package dev.nazna.api.user.handler;

import dev.nazna.api.user.domain.model.User;
import dev.nazna.api.user.usecase.UserUsecase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class UserHandlerTest {

  @Autowired
  RouterFunction<ServerResponse> routerFunction;
  WebTestClient client;
  @MockBean
  private UserUsecase usecase;

  @BeforeEach
  public void setup() {
    client = WebTestClient.bindToRouterFunction(routerFunction).configureClient().build();
  }

  @Test
  public void find_ok() {
    // arrange
    when(usecase.find(any())).thenReturn(Mono.just(new User(1L, "alma")));

    // act
    var actual = client
      .get()
      .uri("/api/users/v1/{id}", "1")
      .accept(MediaType.APPLICATION_JSON)
      .exchange()
      .expectStatus();

    actual.isOk()
      .expectBody(User.class)
      .isEqualTo(new User(1L, "alma"));
  }

}
