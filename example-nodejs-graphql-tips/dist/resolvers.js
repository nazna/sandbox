import db from './db.json' with { type: 'json' };
export const resolvers = {
    Query: {
        search(_, { limit, offset }) {
            return {
                total: db.places.length,
                places: db.places.slice(Math.min(db.places.length - 1, offset), Math.min(db.places.length, limit + offset)),
            };
        },
    },
    Place: {
        reviews(_, __) {
            return null;
        },
    },
};
//# sourceMappingURL=resolvers.js.map