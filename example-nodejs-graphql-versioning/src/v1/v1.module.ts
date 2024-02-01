import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: 'v1',
      debug: true,
      playground: true,
      typePaths: ['./src/v1/**/*.graphql'],
      include: [BookModule],
    }),
    BookModule,
  ],
})
export class V1Module {}
