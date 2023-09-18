package dev.nazna.sandbox.examplejavaspringgraphql.config;

import com.meilisearch.sdk.Client;
import com.meilisearch.sdk.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration(proxyBeanMethods = false)
public class MeilisearchConfig {

  @Bean
  public Client meilisearchClient() {
    final var config = new Config("http://host.docker.internal:8081", "this-is-a-meilisearch-secret-key");
    return new Client(config);
  }
}
