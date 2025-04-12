import { HttpModule, Module } from '@nestjs/common'
import { BooksResolver } from './books.resolver'
import { BooksService } from './books.service'

@Module({
  imports: [HttpModule],
  providers: [BooksResolver, BooksService],
  exports: [BooksService],
})
export class BooksModule {}
