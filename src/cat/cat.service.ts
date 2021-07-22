import { Injectable, NotFoundException } from '@nestjs/common'
import { catsResponse } from '../helpers/fixtures/cats'
import { pageInfo } from '../helpers/page-info'
import { Cat, CatConnection, PageInfo } from '../schema'
import { GetCatsItem } from './cat.types'

@Injectable()
export class CatService {
  findById(id: string): Cat {
    const response = catsResponse
    const result = response.cats.find((cat) => cat.id === id)

    if (!result) {
      throw new NotFoundException()
    }

    return this.mapToCat(result)
  }

  find(limit: number, offset: number): CatConnection {
    const response = catsResponse
    const result = response.cats.slice(offset, limit + offset)

    return this.mapToCatConnection(pageInfo(response.limit, response.offset, response.total), result)
  }

  private mapToCat(result: GetCatsItem): Cat {
    return {
      id: result.id,
      name: result.name,
      ownerId: result.ownerId,
    }
  }

  private mapToCatConnection(pageInfo: PageInfo, result: GetCatsItem[]): CatConnection {
    return {
      pageInfo,
      nodes: result.map(this.mapToCat),
    }
  }
}
