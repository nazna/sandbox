import { scheduler } from 'node:timers/promises';
import db from './db.json' with { type: 'json' };
import { PlaceConnection, Review } from './resolvers-types.js';

export const fetchPlacesByQuery = async (q: string, limit: number, offset: number): Promise<PlaceConnection> => {
  await scheduler.wait(256);

  const result = {
    q,
    total: db.places.length,
    hits: db.places.slice(Math.min(db.places.length - 1, offset), Math.min(db.places.length, limit + offset)),
  };

  return {
    total: result.total,
    places: result.hits,
  };
};

export const fetchReviewById = async (id: string): Promise<Review> => {
  await scheduler.wait(256);

  return {
    reviewId: '1',
    score: 5.0,
    text: 'OK',
  };
};

export const fetchReviewsByIds = async (ids: string[]): Promise<Review[]> => {
  await scheduler.wait(256);
  return [];
};
