import { Args, Query, Resolver } from '@nestjs/graphql'
import { Book, BookOrder } from '../graphql.schema'
import { BooksService } from './books.service'

@Resolver('Books')
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query()
  public async books(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('orderBy') orderBy: BookOrder
  ): Promise<Book[]> {
    return await this.bookService.findAll(limit, offset, orderBy)
  }

  @Query()
  public async book(@Args('bookId') bookId: string): Promise<Book> {
    return await this.bookService.findById(bookId)
  }
}
