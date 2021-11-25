package dev.nazna.examplespringbackend.infrastructure.datasource.dao;

import dev.nazna.examplespringbackend.infrastructure.entity.UserEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result;
import org.springframework.lang.NonNull;


@ConfigAutowireable
@Dao
public interface UserDao {

  @Select
  UserEntity selectByUserId(@NonNull Long userId);

  @Insert(include = "name")
  Result<UserEntity> insert(@NonNull UserEntity userEntity);

}
