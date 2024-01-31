package dev.nazna.examplespringbackend.application.mapper;

import dev.nazna.examplespringbackend.ConversionServiceAdapter;
import dev.nazna.examplespringbackend.domain.User;
import dev.nazna.examplespringbackend.infrastructure.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.core.convert.converter.Converter;

@Mapper(componentModel = "spring", uses = ConversionServiceAdapter.class)
public interface UserEntityMapper extends Converter<UserEntity, User> {

  @Override
  @Mapping(source = "userId", target = "id")
  User convert(UserEntity entity);

}
