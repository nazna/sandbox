import { FieldResolver, Resolver, ResolverInterface, Root } from 'type-graphql'
import { Book } from '../entities/book'
import { Like } from '../entities/like'
import { find } from '../services/like'

@Resolver(() => Book)
export class BookFieldResolver implements ResolverInterface<Book> {
  @FieldResolver({ description: 'A like infomation about the parent book' })
  async like(@Root() book: Book): Promise<Like> {
    const item = await find(book.id)

    const like = new Like()
    like.count = item.count
    like.status = item.status
    like.available = item.available

    return like
  }
}
