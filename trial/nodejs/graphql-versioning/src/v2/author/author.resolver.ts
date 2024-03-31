import { Query, Resolver } from '@nestjs/graphql'
import { Author } from '../graphql.schema'

@Resolver('Author')
export class AuthorResolver {
  @Query()
  async author(): Promise<Author> {
    const author = new Author()

    author.id = '10'
    author.name = 'Anony Mous'

    return author
  }
}
