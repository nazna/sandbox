import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Cat, CatConnection, Owner } from '../schema'
import { CatArgs } from './args/cat'
import { CatsArgs } from './args/cats'
import { CatOwnerLoader } from './cat-owner.loader'
import { CatService } from './cat.service'

@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService, private readonly catOwnerLoader: CatOwnerLoader) {}

  @Query()
  async cat(@Args() args: CatArgs): Promise<Cat> {
    return await this.catService.find(args.catId)
  }

  @Query()
  async cats(@Args() args: CatsArgs): Promise<CatConnection> {
    return await this.catService.search(args.limit, args.offset)
  }

  @ResolveField()
  async owner(@Parent() cat: Cat): Promise<Owner> {
    return await this.catOwnerLoader.load(cat.ownerId)
  }
}
