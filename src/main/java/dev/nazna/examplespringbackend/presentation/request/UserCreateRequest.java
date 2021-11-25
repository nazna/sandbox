package dev.nazna.examplespringbackend.presentation.request;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

@Data
@Accessors(chain = true)
public class UserCreateRequest {

  @NotBlank
  @Max(16)
  public String name;

}
