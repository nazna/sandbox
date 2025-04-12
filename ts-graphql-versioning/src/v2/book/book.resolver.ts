import { Query, Resolver } from '@nestjs/graphql'
import { Book } from '../graphql.schema'

@Resolver('Book')
export class BookResolver {
  @Query()
  async book(): Promise<Book> {
    const book = new Book()

    book.id = '2'
    book.title = 'Change the world!'
    book.description = 'Is this world versioned?'

    return book
  }
}
