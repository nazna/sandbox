import DataLoader from 'dataloader';
import { getPlacesByIds } from './loader.js';
import { Review } from './resolvers-types.js';
import { findReview } from './services.js';

export const context = {
  reviewLoader: new DataLoader<string, Review>((ids) => {
    return ids.map((id) => findReview(id));
  }),
};
