import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AuthorModule } from './author/author.module'
import { BookModule } from './book/book.module'
import { MovieModule } from './movie/movie.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['**/schema/*.graphql'],
    }),
    AuthorModule,
    BookModule,
    MovieModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
