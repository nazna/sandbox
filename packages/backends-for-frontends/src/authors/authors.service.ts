import { HttpService, Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Author } from '../graphql.schema'

@Injectable()
export class AuthorsService {
  private readonly baseURL: string

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.baseURL = this.configService.get('backends-for-frontends.api.authors.baseURL')!
  }

  public async findAll(limit: number, offset: number): Promise<Author[]> {
    const params = { limit, offset }

    try {
      const { data } = await this.httpService
        .get<Author[]>(this.baseURL, { params })
        .toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  public async findById(authorId: string): Promise<Author> {
    try {
      const { data } = await this.httpService.get(`${this.baseURL}/${authorId}`).toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  public async findByIds(authorIds: readonly string[]): Promise<Author[]> {
    try {
      const { data } = await this.httpService.get<Author[]>(`${this.baseURL}/${authorIds.join(',')}`).toPromise()

      return data
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}
