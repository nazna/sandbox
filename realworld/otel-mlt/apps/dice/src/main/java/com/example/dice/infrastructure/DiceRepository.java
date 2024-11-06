package com.example.dice.infrastructure;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

@Repository
public class DiceRepository {

  private static final String SQL = "SELECT value FROM dice WHERE side = :side;";

  private final JdbcClient jdbcClient;

  public DiceRepository(JdbcClient jdbcClient) {
    this.jdbcClient = jdbcClient;
  }

  public Integer findOne(Integer side) {
    return jdbcClient.sql(SQL).param("side", side).query(Integer.class).single();
  }
}
