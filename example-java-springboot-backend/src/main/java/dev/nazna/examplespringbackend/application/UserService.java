package dev.nazna.examplespringbackend.application;

import dev.nazna.examplespringbackend.domain.User;
import dev.nazna.examplespringbackend.infrastructure.datasource.repository.UserRepository;
import dev.nazna.examplespringbackend.infrastructure.entity.UserEntity;
import dev.nazna.examplespringbackend.presentation.request.UserCreateRequest;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final ConversionService conversionService;
  private final UserRepository userRepository;

  public User find(Long id) {
    User user = userRepository.find(id);

    if (ObjectUtils.isEmpty(user)) {
      throw new RuntimeException("user not found");
    }

    return user;
  }

  public User create(UserCreateRequest request) {
    UserEntity input = conversionService.convert(request, UserEntity.class);
    return userRepository.create(input);
  }

}
