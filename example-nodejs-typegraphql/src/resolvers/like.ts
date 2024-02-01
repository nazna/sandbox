import { Arg, Mutation, Resolver } from 'type-graphql'
import { Like } from '../entities/like'
import { AddLikeInput, RemoveLikeInput } from '../entities/like.input'
import { add, remove } from '../services/like'

@Resolver(() => Like)
export class LikeResolver {
  @Mutation(() => Like, { description: 'Add a like to the book' })
  async addLike(@Arg('input') input: AddLikeInput): Promise<Like> {
    const result = await add(input.bookId)
    return result
  }

  @Mutation(() => Like, { description: 'Remove a like to the book' })
  async removeLike(@Arg('input') input: RemoveLikeInput): Promise<Like> {
    const result = await remove(input.bookId)
    return result
  }
}
