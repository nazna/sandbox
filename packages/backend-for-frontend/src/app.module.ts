import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import configuration from './config'
import DepthLimit from 'graphql-depth-limit'
import { BooksModule } from './books/books.module'
import { BooksService } from './books/books.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRootAsync({
      imports: [BooksModule],
      inject: [BooksService],
      useFactory: async (booksService: BooksService) => ({
        debug: true,
        playground: true,
        mocks: true,
        mockEntireSchema: false,
        typePaths: ['./**/*.graphql'],
        validationRules: [DepthLimit(3)],
        dataSources: () => ({
          booksService,
        }),
      }),
    }),
    BooksModule,
  ],
})
export class AppModule {}
