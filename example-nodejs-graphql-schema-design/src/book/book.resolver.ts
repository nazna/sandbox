import { InternalServerErrorException } from '@nestjs/common'
import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author, Book } from '../graphql.schema'

@Resolver('Book')
export class BookResolver {
  @Query()
  async books(@Args('fail') fail: boolean): Promise<Book[] | null> {
    if (fail) {
      throw new InternalServerErrorException()
    }

    const book1 = new Book()
    book1.id = '1'
    book1.title = 'book is nullable'

    return [book1]
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
