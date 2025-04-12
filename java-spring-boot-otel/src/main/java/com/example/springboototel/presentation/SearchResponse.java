package com.example.springboototel.presentation;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.springboototel.domain.Comment;
import com.example.springboototel.domain.Place;
import com.example.springboototel.presentation.SearchResponse.SearchResponsePlace.SearchResponseComment;

public record SearchResponse(List<SearchResponsePlace> results) {

  public static SearchResponse from(List<Place> places, List<Comment> comments) {
    Map<Integer, List<Comment>> gcs = comments.stream().collect(Collectors.groupingBy(Comment::placeId));
    List<SearchResponsePlace> rps = places.stream()
        .map(place -> {
          var rcs = gcs.getOrDefault(place.placeId(), List.of()).stream().map(SearchResponseComment::from).toList();
          return SearchResponsePlace.from(place, rcs);
        })
        .toList();
    return new SearchResponse(rps);
  }

  public record SearchResponsePlace(Integer placeId, String name, String prefecture, String city,
      List<SearchResponseComment> comments) {

    public static SearchResponsePlace from(Place place, List<SearchResponseComment> comments) {
      return new SearchResponsePlace(place.placeId(), place.name(), place.prefecture(), place.city(), comments);
    }

    public record SearchResponseComment(String commentId, String body, Integer rating) {

      public static SearchResponseComment from(Comment comment) {
        return new SearchResponseComment(comment.commentId(), comment.body(), comment.rating());
      }
    }
  }
}
