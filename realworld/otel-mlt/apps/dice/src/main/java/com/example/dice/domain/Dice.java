package com.example.dice.domain;

public record Dice(Integer id, Integer base, Integer factor, Integer delta, Integer penalty) {

  public static Dice from(Integer id, Integer base, Integer factor, Integer delta, Integer penalty) {
    return new Dice(id, base, factor, delta, penalty);
  }
}
