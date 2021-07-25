import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Cat, Owner, OwnerConnection } from '../schema'
import { OwnerArgs } from './args/owner'
import { OwnersArgs } from './args/owners'
import { OwnerService } from './owner.service'

@Resolver('Owner')
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Query()
  async owner(@Args() args: OwnerArgs): Promise<Owner> {
    return await this.ownerService.findOne(args.ownerId)
  }

  @Query()
  async owners(@Args() args: OwnersArgs): Promise<OwnerConnection> {
    return await this.ownerService.search(args.limit, args.offset)
  }

  @ResolveField()
  async cats(@Parent() owner: Owner): Promise<Cat[]> {
    console.log(owner)
    throw new Error('NOT IMPLEMENTED')
  }
}
