package dev.nazna.sandbox.examplejavaspringgraphql.infra;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.meilisearch.sdk.Client;
import com.meilisearch.sdk.exceptions.MeilisearchApiException;
import com.meilisearch.sdk.exceptions.MeilisearchException;

import dev.nazna.sandbox.examplejavaspringgraphql.domain.Place;
import dev.nazna.sandbox.examplejavaspringgraphql.infra.response.PlaceDocument;

@Repository
public class PlaceSearchRepository {

  private final Client meilisearchClient;

  public PlaceSearchRepository(final Client meilisearchClient) {
    this.meilisearchClient = meilisearchClient;
  }

  public Optional<Place> find(final String placeId) {
    try {
      final PlaceDocument doc = meilisearchClient.index("places").getDocument(placeId, PlaceDocument.class);
      return Optional.of(new Place(doc.placeId(), doc.placeId(), doc.name()));
    } catch (MeilisearchApiException ex) {
      return Optional.empty();
    } catch (MeilisearchException ex) {
      throw new RuntimeException("Failed to search places", ex);
    }
  }
}
