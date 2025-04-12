package com.example.dice.infrastructure;

import java.net.URI;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

@Repository
public class AmplifierRepository {

  private static final String URL = "http://amplifier:3000/amplifier";

  private final RestClient restClient;

  public AmplifierRepository(RestClient restClient) {
    this.restClient = restClient;
  }

  public AmplifierResponse findOne(Integer id) {
    URI uri = UriComponentsBuilder.fromUriString(URL)
        .queryParam("id", id)
        .encode()
        .build()
        .toUri();

    AmplifierResponse response = restClient.get()
        .uri(uri)
        .retrieve()
        .body(AmplifierResponse.class);

    return Optional.ofNullable(response).orElseThrow();
  }

  public record AmplifierResponse(Integer id, Integer factor, Integer delta) {
  }
}
