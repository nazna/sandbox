import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Cat, Owner, OwnerConnection } from '../schema'
import { OwnerArgs } from './args/owner'
import { OwnersArgs } from './args/owners'
import { OwnerService } from './owner.service'

@Resolver('Owner')
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Query()
  owner(@Args() args: OwnerArgs): Owner | null {
    return this.ownerService.findById(args.ownerId)
  }

  @Query()
  owners(@Args() args: OwnersArgs): OwnerConnection | null {
    return this.ownerService.find(args.limit, args.offset)
  }

  @ResolveField()
  cats(@Parent() owner: Owner): Cat[] | null {
    console.log(owner)
    return null
  }
}
