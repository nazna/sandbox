import { Module } from '@nestjs/common'
import { CatRepository } from './cat.repository'
import { CatResolver } from './cat.resolver'
import { CatService } from './cat.service'

@Module({
  providers: [CatResolver, CatService, CatRepository],
})
export class CatModule {}
