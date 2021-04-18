import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthorModule } from './author/author.module'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: 'v2',
      debug: true,
      playground: {
        settings: {
          'request.credentials': 'same-origin',
        },
      },
      typePaths: ['./src/v2/**/*.graphql'],
      include: [AuthorModule, BookModule],
    }),
    AuthorModule,
    BookModule,
  ],
})
export class V2Module {}
