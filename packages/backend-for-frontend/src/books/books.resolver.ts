import { Query, Resolver } from '@nestjs/graphql'
import { Book } from '../graphql.schema'
import { BooksService } from './books.service'

@Resolver('Books')
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query()
  public async books(): Promise<Book[]> {
    return await this.bookService.findAll()
  }
}
