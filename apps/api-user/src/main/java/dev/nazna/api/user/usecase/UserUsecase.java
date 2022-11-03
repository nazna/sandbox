package dev.nazna.api.user.usecase;

import dev.nazna.api.user.domain.dto.UserCreateRequest;
import dev.nazna.api.user.domain.dto.UserFindRequest;
import dev.nazna.api.user.domain.exception.InternalServerErrorException;
import dev.nazna.api.user.domain.exception.NotFoundException;
import dev.nazna.api.user.domain.model.User;
import dev.nazna.api.user.domain.schema.Users;
import dev.nazna.api.user.infra.UserRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class UserUsecase {

  private final UserRepository repository;

  public UserUsecase(UserRepository repository) {
    this.repository = repository;
  }

  public Mono<User> find(final UserFindRequest request) {
    var id = Long.valueOf(request.id());

    return repository.findById(id)
      .map(user -> new User(user.id(), user.name()))
      .switchIfEmpty(Mono.error(new NotFoundException("User not found.")));
  }

  public Mono<User> create(final UserCreateRequest request) {
    var input = new Users(null, request.name());

    return repository.save(input)
      .map(user -> new User(user.id(), user.name()))
      .switchIfEmpty(Mono.error(new InternalServerErrorException("User not created.")));
  }

}
