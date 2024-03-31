import { Injectable, NotFoundException, Scope } from '@nestjs/common'
import DataLoader from 'dataloader'
import { OwnerRepository } from '../owner/owner.repository'
import { Owner } from '../schema'

@Injectable({ scope: Scope.REQUEST })
export class CatOwnerLoader {
  private readonly loader = new DataLoader<string, Owner>(this.batchLoad.bind(this))

  constructor(private readonly ownerRepository: OwnerRepository) {}

  async load(key: string): Promise<Owner> {
    return await this.loader.load(key)
  }

  private async batchLoad(keys: readonly string[]): Promise<(Owner | NotFoundException)[]> {
    const { result } = await this.ownerRepository.findMany({
      where: {
        id: { in: [...keys] },
      },
    })

    const ownersMap: Map<string, Owner> = new Map(result.map((owner) => [owner.id, owner]))

    return keys.map((key) => ownersMap.get(key) || new NotFoundException())
  }
}
