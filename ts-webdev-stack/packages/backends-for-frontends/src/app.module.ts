import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import DepthLimit from 'graphql-depth-limit'
import { BooksModule } from './books/books.module'
import { AuthorsModule } from './authors/authors.module'
import configuration from './config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      validationRules: [DepthLimit(2)],
    }),
    BooksModule,
    AuthorsModule,
  ],
})
export class AppModule {}
