import DataLoader from 'dataloader'
import { FieldResolver, Resolver, ResolverInterface, Root } from 'type-graphql'
import { Book } from '../entities/book'
import { Like } from '../entities/like'
import { LikeResponseItem } from '../mocks/like'
import { search } from '../services/like'

@Resolver(() => Book)
export class BookFieldResolver implements ResolverInterface<Book> {
  private readonly loader = new DataLoader<string, LikeResponseItem>(this.batch)

  @FieldResolver({ description: 'A like infomation about the parent book' })
  async like(@Root() book: Book): Promise<Like> {
    const { count, status, available } = await this.loader.load(book.id)

    const like = new Like()
    like.count = count
    like.status = status
    like.available = available

    return like
  }

  private async batch(keys: readonly string[]): Promise<(LikeResponseItem | Error)[]> {
    const likes = await search(keys)
    return keys.map((key) => likes.items.find((like) => like.bookId === key) || new Error('404: Not Found'))
  }
}
