import { Query, Resolver } from '@nestjs/graphql'
import { Book } from '../graphql.schema'

@Resolver('Book')
export class BookResolver {
  @Query()
  async book(): Promise<Book> {
    const book = new Book()

    book.id = '1'
    book.title = 'Hello, world!'
    book.description = 'An example to learn GraphQL versioning'
    book.secretWriter = 'Ghost Scripted'

    return book
  }
}
