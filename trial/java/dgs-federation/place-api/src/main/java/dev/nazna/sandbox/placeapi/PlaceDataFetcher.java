package dev.nazna.sandbox.placeapi;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@DgsComponent
public class PlaceDataFetcher {

  private final PlaceRepository placeRepository;

  public PlaceDataFetcher(PlaceRepository placeRepository) {
    this.placeRepository = placeRepository;
  }

  @DgsQuery
  public Mono<Place> place(@InputArgument Integer placeId) {
    return placeRepository.findById(placeId)
        .map(Place::from);
  }

  @DgsQuery
  public Flux<Place> places() {
    return placeRepository.findAll()
        .map(Place::from);
  }
}
