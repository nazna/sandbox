import { Arg, Query, Resolver } from 'type-graphql'
import { Book } from '../entities/book'
import { search } from '../services/book'

@Resolver(() => Book)
export class BookResolver {
  @Query(() => Book, { description: 'A book information' })
  async book(@Arg('id') id: string): Promise<Book> {
    const { items } = await search(id)

    if (items.length > 1) {
      throw new Error('500: Internal Server Error')
    }

    const book = new Book()
    book.id = items[0].bookId
    book.title = items[0].title
    book.description = items[0].description

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
