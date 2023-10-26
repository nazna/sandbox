package dev.nazna.sandbox.reviewapi;

import java.util.List;

public record Place(Integer placeId, List<Review> reviews) {

}
