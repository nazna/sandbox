import { assert, defaulted, intersection, number, object, optional, string, struct } from 'superstruct'

const BooksArgs = object({
  limit: defaulted(number(), 4),
  offset: intersection([
    number(),
    struct('Max10', (value: unknown): boolean => {
      return (value as number) < 10
    }),
  ]),
  orderBy: optional(
    object({
      field: string(),
      direction: string(),
    })
  ),
})

export const isValid = (target: unknown) => assert(target, BooksArgs)
