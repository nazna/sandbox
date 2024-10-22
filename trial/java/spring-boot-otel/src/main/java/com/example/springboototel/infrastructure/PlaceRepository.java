package com.example.springboototel.infrastructure;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import com.example.springboototel.domain.Place;

@Repository
public class PlaceRepository {

  private static final String SQL = """
      SELECT
        id,
        name,
        prefecture,
        city
      FROM
        places
      WHERE
        ts @@ to_tsquery('simple', :q);
      """;

  private final JdbcClient jdbcClient;

  public PlaceRepository(JdbcClient jdbcClient) {
    this.jdbcClient = jdbcClient;
  }

  public List<Place> findMany(String q) {
    return jdbcClient.sql(SQL)
        .param("q", "all")
        .query(PlaceResult.class)
        .stream()
        .map(Place::from)
        .toList();
  }

  public record PlaceResult(Integer id, String name, String prefecture, String city) {
  }
}
