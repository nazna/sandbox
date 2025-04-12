package com.example.dice.presentation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dice.application.DiceService;
import com.example.dice.domain.Dice;

@RestController
public class DiceController {

  private static final Logger log = LoggerFactory.getLogger(DiceController.class);

  private final DiceService diceService;

  public DiceController(DiceService diceService) {
    this.diceService = diceService;
  }

  @GetMapping("/dice")
  public ResponseEntity<Dice> dice(@RequestParam Integer id) throws InterruptedException {
    if (id.equals(123)) {
      throw new RuntimeException("The parameter id is 123.");
    }

    log.info("Request accepted / with id=%d".formatted(id));

    return ResponseEntity.ok().body(diceService.roll(id));
  }

  @GetMapping("/favicon.ico")
  public void favicon() {
  }
}
