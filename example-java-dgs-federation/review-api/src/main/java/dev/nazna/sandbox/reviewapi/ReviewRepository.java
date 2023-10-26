package dev.nazna.sandbox.reviewapi;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ReviewRepository extends ReactiveCrudRepository<ReviewEntity, Integer> {

}
