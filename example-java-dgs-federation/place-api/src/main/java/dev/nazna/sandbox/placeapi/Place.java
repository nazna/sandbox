package dev.nazna.sandbox.placeapi;

import java.time.OffsetDateTime;

public record Place(Integer placeId, String name, OffsetDateTime createdAt) {

  public static Place from(PlaceEntity entity) {
    return new Place(entity.placeId(), entity.name(), entity.createdAt());
  }
}
