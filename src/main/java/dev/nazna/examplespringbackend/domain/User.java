package dev.nazna.examplespringbackend.domain;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
public class User {

  private Long id;
  private String name;
  private Date createdAt;
  private Date updatedAt;
  private Date deletedAt;

}
