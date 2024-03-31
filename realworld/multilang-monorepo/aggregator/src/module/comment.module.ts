import { Module } from '@nestjs/common'
import { CommentResolver } from '../resolver/comment.resolver'
import { CommentService } from '../service/comment.service'
import { UserService } from '../service/user.service'

@Module({
  providers: [CommentResolver, CommentService, UserService],
})
export class CommentModule {}
