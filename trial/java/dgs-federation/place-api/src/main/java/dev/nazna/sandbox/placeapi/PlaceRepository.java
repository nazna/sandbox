package dev.nazna.sandbox.placeapi;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface PlaceRepository extends ReactiveCrudRepository<PlaceEntity, Integer> {

}
