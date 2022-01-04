package dev.nazna.examplespringbackend.presentation.controller;

import dev.nazna.examplespringbackend.application.UserService;
import dev.nazna.examplespringbackend.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest {

  private MockMvc mockMvc;

  @InjectMocks
  private UserController userController;

  @Mock
  private UserService userService;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.openMocks(this);
    this.mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
  }

  @Nested
  class Find {
    @Test
    public void ok() throws Exception {
      // arrange
      Long id = 1L;
      LocalDateTime now = LocalDateTime.now();

      User expected = new User().setId(id).setName("foo").setCreatedAt(now).setUpdatedAt(now);
      doReturn(expected).when(userService).find(anyLong());

      // act
      MvcResult result = mockMvc.perform(get("/api/v1/users/" + id)).andExpect(status().isOk()).andReturn();

      // assert
      assertThat(result).isNotNull();
    }
  }

}
