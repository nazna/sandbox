package dev.nazna.examplespringbackend.infrastructure.entity;

import org.seasar.doma.Column;
import org.seasar.doma.Entity;
import org.seasar.doma.GeneratedValue;
import org.seasar.doma.GenerationType;
import org.seasar.doma.Id;
import org.seasar.doma.Table;
import org.seasar.doma.jdbc.entity.NamingType;

import java.util.Date;

@Entity(immutable = true, naming = NamingType.SNAKE_LOWER_CASE)
@Table(name = "user")
public record UserEntity(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long userId,
  @Column String name,
  @Column Date createdAt,
  @Column Date updatedAt,
  @Column Date deletedAt
) {
}
