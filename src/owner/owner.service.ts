import { Injectable, NotFoundException } from '@nestjs/common'
import { ownersResponse } from '../helpers/fixtures/owners'
import { pageInfo } from '../helpers/page-info'
import { Owner, OwnerConnection, PageInfo } from '../schema'
import { GetOwnersItem } from './owner.types'

@Injectable()
export class OwnerService {
  findById(id: string): Owner {
    const response = ownersResponse
    const result = response.owners.find((owner) => owner.id === id)

    if (!result) {
      throw new NotFoundException()
    }

    return this.mapToOwner(result)
  }

  find(limit: number, offset: number): OwnerConnection {
    const response = ownersResponse
    const result = response.owners.slice(offset, limit + offset)

    return this.mapToOwnerConnection(pageInfo(response.limit, response.offset, response.total), result)
  }

  private mapToOwner(result: GetOwnersItem): Owner {
    return {
      id: result.id,
      name: result.name,
      catIds: result.catIds,
    }
  }

  private mapToOwnerConnection(pageInfo: PageInfo, result: GetOwnersItem[]): OwnerConnection {
    return {
      pageInfo,
      nodes: result.map(this.mapToOwner),
    }
  }
}
