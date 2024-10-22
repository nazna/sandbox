package com.example.springboototel.presentation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboototel.application.SearchService;

@RestController
public class SearchController {

  private static final Logger logger = LoggerFactory.getLogger(SearchController.class);

  private final SearchService searchService;

  public SearchController(SearchService searchService) {
    this.searchService = searchService;
  }

  @GetMapping("/")
  public ResponseEntity<SearchResponse> foo(@RequestParam String q) {
    if (!StringUtils.hasText(q)) {
      throw new RuntimeException("The parameter q is invalid.");
    }

    logger.info("Request accepted / with %s".formatted(q));
    return ResponseEntity.ok().body(this.searchService.search(q));
  }

  @GetMapping("/favicon.ico")
  public void favicon() {

  }
}
