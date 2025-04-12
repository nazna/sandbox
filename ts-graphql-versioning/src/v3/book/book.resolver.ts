import { Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author, Book } from '../graphql.schema'

async function sleep(msec: number) {
  return await new Promise((resolve) => setTimeout(resolve, msec))
}
@Resolver('Book')
export class BookResolver {
  @Query()
  async book(): Promise<Book> {
    const book = new Book()

    book.id = '3'
    book.title = 'Recall'
    book.description =
      'Never accept the world as it appears to be. Always dare to see it for what it could be. I hope you do the same.'

    await sleep(300)

    return book
  }

  @ResolveField()
  async author(): Promise<Author> {
    const author = new Author()

    author.id = 'a-1'
    author.name = 'Harold Winston'

    await sleep(100)

    return author
  }
}
