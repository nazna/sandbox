import { Args, Query, Resolver } from '@nestjs/graphql'
import { Owner, OwnerConnection } from '../schema'
import { OwnerArgs } from './args/owner'
import { OwnersArgs } from './args/owners'
import { OwnerService } from './owner.service'

@Resolver('Owner')
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Query()
  async owner(@Args() args: OwnerArgs): Promise<Owner> {
    return await this.ownerService.find(args.ownerId)
  }

  @Query()
  async owners(@Args() args: OwnersArgs): Promise<OwnerConnection> {
    return await this.ownerService.search({ limit: args.limit, offset: args.offset })
  }
}
