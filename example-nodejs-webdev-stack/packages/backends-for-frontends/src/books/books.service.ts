import { HttpService, Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Book, BookOrder } from '../graphql.schema'

@Injectable()
export class BooksService {
  private readonly baseURL: string

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.baseURL = this.configService.get('backends-for-frontends.api.books.baseURL')!
  }

  public async findAll(limit: number, offset: number, orderBy: BookOrder): Promise<Book[]> {
    const params = {
      limit,
      offset,
      orderBy: { ...orderBy }, // Query args is not pure object (?)
    }

    try {
      const { data } = await this.httpService
        .get<Book[]>(this.baseURL, { params })
        .toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  public async findById(bookId: string): Promise<Book> {
    try {
      const { data } = await this.httpService.get<Book>(`${this.baseURL}/${bookId}`).toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  public async findByIds(bookIds: readonly string[]): Promise<Book[]> {
    try {
      const { data } = await this.httpService.get<Book[]>(`${this.baseURL}/${bookIds.join(',')}`).toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}
