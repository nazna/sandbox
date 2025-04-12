import { Module } from '@nestjs/common'
import { MovieResolver } from './movie.resolver'

@Module({
  providers: [MovieResolver],
})
export class MovieModule {}
