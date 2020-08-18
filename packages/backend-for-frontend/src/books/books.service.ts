import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { RESTDataSource } from 'apollo-datasource-rest'
import DataLoader from 'dataloader'
import { Book } from '../graphql.schema'

@Injectable()
export class BooksService extends RESTDataSource {
  constructor(private readonly configService: ConfigService) {
    super()
    this.baseURL = `http://${this.configService.get('backend.host')}:${this.configService.get(
      'backend.port'
    )}/${this.configService.get('backend.version')}`
  }

  private dataloader = new DataLoader(async (bookIds: readonly string[]) => {
    return this.findByIds(bookIds)
  })

  public async load(bookId: string): Promise<Book> {
    return await this.dataloader.load(bookId)
  }

  public async findAll(): Promise<Book[]> {
    Logger.log(`BooksService.findAll()`)
    return await this.get('/books')
  }

  public async findByIds(bookIds: readonly string[]): Promise<Book[]> {
    Logger.log(`BooksService.findByIds(${bookIds})`)
    return await this.get(`/books/${bookIds}`)
  }
}
