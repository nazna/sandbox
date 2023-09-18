package dev.nazna.sandbox.examplejavaspringgraphql.resolver;

import java.util.Optional;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import dev.nazna.sandbox.examplejavaspringgraphql.application.PlaceService;
import dev.nazna.sandbox.examplejavaspringgraphql.domain.Place;

@Controller
public class PlaceResolver {

  private final PlaceService placeService;

  public PlaceResolver(final PlaceService placeService) {
    this.placeService = placeService;
  }

  @QueryMapping
  public Optional<Place> place(@Argument final String placeId) {
    return this.placeService.findByPlaceId(placeId);
  }
}
