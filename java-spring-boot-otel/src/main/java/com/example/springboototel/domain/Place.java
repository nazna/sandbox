package com.example.springboototel.domain;

import com.example.springboototel.infrastructure.PlaceRepository.PlaceResult;

public record Place(Integer placeId, String name, String prefecture, String city) {

  public static Place from(PlaceResult response) {
    return new Place(response.id(), response.name(), response.prefecture(), response.city());
  }
}
