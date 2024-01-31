package dev.nazna.examplespringbackend.domain;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class Collection<T> {

  private Integer total;
  private List<T> items;

}
