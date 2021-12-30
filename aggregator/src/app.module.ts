import { Module } from '@nestjs/common'
import { CommentModule, GraphQLModule, UserModule } from './module'

@Module({
  imports: [GraphQLModule, UserModule, CommentModule],
})
export class AppModule {}
