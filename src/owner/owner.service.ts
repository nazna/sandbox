import { Injectable } from '@nestjs/common'
import { Owner, OwnerConnection } from '../schema'
import { OwnerMapper } from './owner.mapper'
import { OwnerRepository } from './owner.repository'

export interface SearchOwnerPayload {
  limit: number
  offset: number
  ownerIds?: string[]
}

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async find(id: string): Promise<Owner> {
    const owner = await this.ownerRepository.findOne({ where: { id } })

    return OwnerMapper.toEntity(owner)
  }

  async search(payload: SearchOwnerPayload): Promise<OwnerConnection> {
    const owners = await this.ownerRepository.findMany({
      skip: payload.offset,
      take: payload.limit,
      where: {
        OR: [
          {
            id: { in: payload.ownerIds },
          },
        ],
      },
    })

    return OwnerMapper.toEntityConnection(owners, payload.limit, payload.offset)
  }
}
