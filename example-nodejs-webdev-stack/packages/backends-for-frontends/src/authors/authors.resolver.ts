import { Args, Query, Resolver } from '@nestjs/graphql'
import { Author } from '../graphql.schema'
import { AuthorsService } from './authors.service'

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query()
  public async authors(@Args('limit') limit: number, @Args('offset') offset: number): Promise<Author[]> {
    return await this.authorsService.findAll(limit, offset)
  }

  @Query()
  public async author(@Args('authorId') authorId: string): Promise<Author> {
    return await this.authorsService.findById(authorId)
  }
}
