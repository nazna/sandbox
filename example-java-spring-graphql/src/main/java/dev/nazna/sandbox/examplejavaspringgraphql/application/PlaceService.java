package dev.nazna.sandbox.examplejavaspringgraphql.application;

import java.util.Optional;

import org.springframework.stereotype.Service;

import dev.nazna.sandbox.examplejavaspringgraphql.domain.Place;
import dev.nazna.sandbox.examplejavaspringgraphql.infra.PlaceSearchRepository;

@Service
public class PlaceService {

  private final PlaceSearchRepository placeSearchRepository;

  public PlaceService(final PlaceSearchRepository placeSearchRepository) {
    this.placeSearchRepository = placeSearchRepository;
  }

  public Optional<Place> findByPlaceId(final String placeId) {
    return this.placeSearchRepository.find(placeId);
  }
}
