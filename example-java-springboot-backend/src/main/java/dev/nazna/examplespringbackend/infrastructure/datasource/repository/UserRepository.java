package dev.nazna.examplespringbackend.infrastructure.datasource.repository;

import dev.nazna.examplespringbackend.domain.User;
import dev.nazna.examplespringbackend.domain.exception.NotFoundRuntimeException;
import dev.nazna.examplespringbackend.infrastructure.datasource.dao.UserDao;
import dev.nazna.examplespringbackend.infrastructure.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.seasar.doma.jdbc.Result;
import org.springframework.core.convert.ConversionService;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepository {

  private final ConversionService conversionService;
  private final UserDao userDao;

  public UserEntity find(@NonNull Long id) {
    return userDao.selectByUserId(id).orElseThrow(NotFoundRuntimeException::new);
  }

  @Transactional
  public User create(@NonNull UserEntity entity) {
    Result<UserEntity> insertResult = userDao.insert(entity);
    UserEntity result = userDao.selectByUserId(insertResult.getEntity().userId());
    return conversionService.convert(result, User.class);
  }

}
