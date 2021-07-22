import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Cat, CatConnection, Owner } from '../schema'
import { CatArgs } from './args/cat'
import { CatsArgs } from './args/cats'
import { CatService } from './cat.service'

@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query()
  cat(@Args() args: CatArgs): Cat | null {
    return this.catService.findById(args.catId)
  }

  @Query()
  cats(@Args() args: CatsArgs): CatConnection | null {
    return this.catService.find(args.limit, args.offset)
  }

  @ResolveField()
  owner(@Parent() cat: Cat): Owner | null {
    console.log(cat)
    return null
  }
}
