import { Arg, Query, Resolver } from 'type-graphql'
import { Book } from '../entities/book'
import { find, search } from '../services/book'

@Resolver(() => Book)
export class BookResolver {
  @Query(() => Book, { description: 'A book information' })
  async book(@Arg('id') id: string): Promise<Book> {
    const item = await find(id)

    const book = new Book()
    book.id = item.bookId
    book.title = item.title
    book.description = item.description

    return book
  }

  @Query(() => [Book!]!, { description: 'Books information' })
  async books(): Promise<Book[]> {
    const { items } = await search()

    const books = items.map((item) => {
      const book = new Book()
      book.id = item.bookId
      book.title = item.title
      book.description = item.description

      return book
    })

    return books
  }
}
