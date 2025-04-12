package com.example.springboototel.infrastructure;

import java.net.URI;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.springboototel.domain.Comment;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@Repository
public class CommentRepository {

  private final RestClient restClient;

  public CommentRepository(RestClient restClient) {
    this.restClient = restClient;
  }

  public List<Comment> findMany(List<Integer> ids) {
    URI uri = UriComponentsBuilder
        .fromUriString("http://localhost:8084/comment")
        .queryParam("id", ids)
        .encode()
        .build()
        .toUri();

    List<CommentResponse> response = restClient.get()
        .uri(uri)
        .retrieve()
        .body(new ParameterizedTypeReference<>() {
        });

    return Optional.ofNullable(response)
        .stream()
        .flatMap(Collection::stream)
        .map(Comment::from)
        .toList();
  }

  @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
  public record CommentResponse(String commentId, String body, Integer rating, Integer placeId) {
  }
}
