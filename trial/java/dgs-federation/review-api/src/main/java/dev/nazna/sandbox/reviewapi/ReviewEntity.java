package dev.nazna.sandbox.reviewapi;

import java.time.OffsetDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table(name = "reviews")
public record ReviewEntity(@Id Integer reviewId, Integer placeId, String body, OffsetDateTime createdAt) {

}
