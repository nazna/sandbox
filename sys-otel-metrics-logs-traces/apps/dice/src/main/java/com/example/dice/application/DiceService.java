package com.example.dice.application;

import org.springframework.stereotype.Service;

import com.example.dice.domain.Dice;
import com.example.dice.infrastructure.AmplifierRepository;
import com.example.dice.infrastructure.AmplifierRepository.AmplifierResponse;
import com.example.dice.infrastructure.DiceRepository;

@Service
public class DiceService {

  private final SleepService sleepService;

  private final DiceRepository diceRepository;
  private final AmplifierRepository amplifierRepository;

  public DiceService(SleepService sleepService, DiceRepository diceRepository,
      AmplifierRepository amplifierRepository) {
    this.sleepService = sleepService;
    this.diceRepository = diceRepository;
    this.amplifierRepository = amplifierRepository;
  }

  public Dice roll(Integer id) throws InterruptedException {
    int side = id % 6 + 1;
    int base = diceRepository.findOne(side);
    AmplifierResponse amplify = amplifierRepository.findOne(id);

    int penalty = base * amplify.factor() + amplify.delta();

    sleepService.sleepMs(penalty);

    return Dice.from(id, base, amplify.factor(), amplify.delta(), penalty);
  }
}
