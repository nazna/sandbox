package dev.nazna.sandbox.reviewapi;

import java.util.Map;
import java.util.Objects;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment;
import com.netflix.graphql.dgs.DgsEntityFetcher;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@DgsComponent
public class ReviewDataFetcher {

  private final ReviewRepository reviewRepository;

  public ReviewDataFetcher(ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  @DgsQuery
  public Mono<Review> review(@InputArgument Integer reviewId) {
    return reviewRepository.findById(reviewId)
        .map(Review::from);
  }

  @DgsQuery
  public Flux<Review> reviews() {
    return reviewRepository.findAll()
        .map(Review::from);
  }

  @DgsEntityFetcher(name = "Place")
  public Place place(Map<String, Integer> values) {
    return new Place(values.get("placeId"), null);
  }

  @DgsData(parentType = "Place", field = "reviews")
  public Flux<Review> reviewsForPlace(DgsDataFetchingEnvironment dfe) {
    Place place = dfe.getSource();
    return reviewRepository.findAll()
        .map(Review::from)
        .filter(review -> Objects.equals(review.placeId(), place.placeId()));
  }
}
