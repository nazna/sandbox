package com.example.springboototel.domain;

import com.example.springboototel.infrastructure.CommentRepository.CommentResponse;

public record Comment(String commentId, String body, Integer rating, Integer placeId) {

  public static Comment from(CommentResponse response) {
    return new Comment(response.commentId(), response.body(), response.rating(), response.placeId());
  }
}
