import { InternalServerErrorException } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { Author } from '../graphql.schema'

@Resolver('Author')
export class AuthorResolver {
  @Query()
  async authors(@Args('fail') fail: boolean): Promise<Author[] | null> {
    if (fail) {
      throw new InternalServerErrorException()
    }

    const author1 = new Author()
    author1.id = '1000'
    author1.name = 'John'

    return [author1]
  }
}
