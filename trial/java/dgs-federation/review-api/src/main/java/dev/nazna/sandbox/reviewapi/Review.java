package dev.nazna.sandbox.reviewapi;

import java.time.OffsetDateTime;

public record Review(Integer reviewId, Integer placeId, String body, OffsetDateTime createdAt) {

  public static Review from(ReviewEntity entity) {
    return new Review(entity.reviewId(), entity.placeId(), entity.body(), entity.createdAt());
  }
}
