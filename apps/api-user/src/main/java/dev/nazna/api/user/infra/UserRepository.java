package dev.nazna.api.user.infra;

import dev.nazna.api.user.domain.schema.Users;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface UserRepository extends ReactiveCrudRepository<Users, Long> {
}
