import { InternalServerErrorException } from '@nestjs/common'
import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author, Movie } from '../graphql.schema'

@Resolver('Movie')
export class MovieResolver {
  @Query()
  async movies(@Args('fail') fail: boolean): Promise<Movie[]> {
    if (fail) {
      throw new InternalServerErrorException()
    }

    const movie1 = new Movie()
    movie1.id = '1'
    movie1.title = 'movie is not nullable'

    return [movie1]
  }

  @ResolveField()
  async author(@Args('fail') fail: boolean): Promise<Author> {
    if (fail) {
      throw new InternalServerErrorException()
    }

    const author = new Author()
    author.id = '1000'
    author.name = 'John'

    return author
  }
}
