package dev.nazna.sandbox.placeapi;

import java.time.OffsetDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table(name = "places")
public record PlaceEntity(@Id Integer placeId, String name, OffsetDateTime createdAt) {

}
