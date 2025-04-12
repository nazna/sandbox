import { Module } from '@nestjs/common'
import { GraphQLModule } from './graphql.module'
import { AppController } from './health-check/health-check.controller'
import { UsersModule } from './users/users.module'

@Module({
  controllers: [AppController],
  imports: [GraphQLModule, UsersModule],
})
export class AppModule {}
