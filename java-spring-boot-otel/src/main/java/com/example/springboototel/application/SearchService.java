package com.example.springboototel.application;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springboototel.domain.Comment;
import com.example.springboototel.domain.Place;
import com.example.springboototel.infrastructure.CommentRepository;
import com.example.springboototel.infrastructure.PlaceRepository;
import com.example.springboototel.presentation.SearchResponse;

@Service
public class SearchService {

  private final PlaceRepository placeRepository;
  private final CommentRepository commentRepository;

  public SearchService(PlaceRepository placeRepository, CommentRepository commentRepository) {
    this.placeRepository = placeRepository;
    this.commentRepository = commentRepository;
  }

  public SearchResponse search(String q) {
    List<Place> places = this.placeRepository.findMany(q);
    List<Comment> comments = this.commentRepository.findMany(places.stream().map(p -> p.placeId()).toList());

    return SearchResponse.from(places, comments);
  }
}
