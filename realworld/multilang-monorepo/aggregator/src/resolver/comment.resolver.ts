import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Comment, User } from '../domain/model'
import { CommentService } from '../service/comment.service'
import { UserService } from '../service/user.service'

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService, private readonly userService: UserService) {}

  @Query(() => Comment)
  async comment(@Args('id') id: string): Promise<Comment> {
    return await this.commentService.findById(id)
  }

  @ResolveField()
  async user(@Parent() comment: Comment): Promise<User> {
    return await this.userService.findById(comment.id)
  }
}
