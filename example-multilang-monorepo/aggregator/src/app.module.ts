import { Module } from '@nestjs/common'
import { CommentModule, GraphQLModule, NodeModule, UserModule } from './module'

@Module({
  imports: [GraphQLModule, NodeModule, UserModule, CommentModule],
})
export class AppModule {}
