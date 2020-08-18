import { Resolver, Query } from '@nestjs/graphql'
import { BooksService } from './books.service'
import { Book } from '../graphql.schema'

@Resolver('Books')
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query()
  public async books(): Promise<Book[]> {
    return await this.bookService.findAll()
  }
}
