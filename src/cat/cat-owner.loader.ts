import { Injectable, NotFoundException, Scope } from '@nestjs/common'
import DataLoader from 'dataloader'
import { OwnerService, SearchOwnerPayload } from '../owner/owner.service'
import { Owner } from '../schema'

@Injectable({ scope: Scope.REQUEST })
export class CatOwnerLoader {
  private readonly loader = new DataLoader<string, Owner>(this.batchLoad.bind(this))

  constructor(private readonly ownerService: OwnerService) {}

  async load(key: string): Promise<Owner> {
    return await this.loader.load(key)
  }

  private async batchLoad(keys: readonly string[]): Promise<(Owner | NotFoundException)[]> {
    const payload: SearchOwnerPayload = {
      limit: keys.length,
      offset: 0,
      ownerIds: [...keys],
    }

    const owners = await this.ownerService.search(payload)
    const ownersMap: Map<string, Owner> = new Map(owners.nodes.map((owner) => [owner.id, owner]))

    return keys.map((key) => ownersMap.get(key) || new NotFoundException())
  }
}
