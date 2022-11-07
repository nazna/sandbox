package dev.nazna.api.user.domain.schema;

import org.springframework.data.annotation.Id;

public record Users(@Id Long id, String name) {}
