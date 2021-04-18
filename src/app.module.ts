import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { BookModule } from './v1/book/book.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: 'v1',
      debug: true,
      playground: true,
      typePaths: ['./src/v1/**/*.graphql'],
    }),
    BookModule,
  ],
})
export class AppModule {}
