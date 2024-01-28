import { fetchPlacesByQuery, fetchReviewById } from './repositories.js';

export const searchPlaces = async (q: string, limit: number, offset: number) => {
  return fetchPlacesByQuery(q, limit, offset);
};

export const findReview = async (id: string) => {
  return fetchReviewById(id);
};
