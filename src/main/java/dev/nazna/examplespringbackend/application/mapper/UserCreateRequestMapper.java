package dev.nazna.examplespringbackend.application.mapper;

import dev.nazna.examplespringbackend.ConversionServiceAdapter;
import dev.nazna.examplespringbackend.infrastructure.entity.UserEntity;
import dev.nazna.examplespringbackend.presentation.request.UserCreateRequest;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.core.convert.converter.Converter;

@Mapper(componentModel = "spring", uses = ConversionServiceAdapter.class, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserCreateRequestMapper extends Converter<UserCreateRequest, UserEntity> {

  @Override
  UserEntity convert(UserCreateRequest request);

}
