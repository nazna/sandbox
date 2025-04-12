package com.example.dice.application;

import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import io.opentelemetry.instrumentation.annotations.WithSpan;

@Service
public class SleepService {

  @WithSpan
  public void sleepMs(long duration) throws InterruptedException {
    TimeUnit.MILLISECONDS.sleep(duration * 10);
  }
}
