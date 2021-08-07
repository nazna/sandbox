import { Injectable } from '@nestjs/common'
import { Owner, OwnerConnection } from '../schema'
import { OwnerMapper } from './owner.mapper'
import { OwnerRepository } from './owner.repository'

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async find(id: string): Promise<Owner> {
    const owner = await this.ownerRepository.findOne({ where: { id } })

    return OwnerMapper.toEntity(owner)
  }

  async search(limit: number, offset: number): Promise<OwnerConnection> {
    const owners = await this.ownerRepository.findMany({
      skip: offset,
      take: limit,
    })

    return OwnerMapper.toEntityConnection(owners)
  }
}
