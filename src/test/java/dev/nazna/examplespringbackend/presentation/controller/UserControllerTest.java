package dev.nazna.examplespringbackend.presentation.controller;

import dev.nazna.examplespringbackend.application.UserService;
import dev.nazna.examplespringbackend.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

public class UserControllerTest {

  private UserService userService;

  @BeforeEach
  public void setup() {
    userService = mock(UserService.class);
  }

  @Test
  public void find_ok() {
    // arrange
    Long id = 1L;

    // act
    User result = userService.find(id);

    // assert
    assertThat(result).isNotNull();
  }

}
