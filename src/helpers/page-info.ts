import { PageInfo } from '../schema'

export const pageInfo = (limit: number, offset: number, total: number): PageInfo => {
  return {
    limit,
    offset,
    total,
  }
}
