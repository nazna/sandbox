import { Module } from '@nestjs/common'
import { OwnerModule } from '../owner/owner.module'
import { CatOwnerLoader } from './cat-owner.loader'
import { CatRepository } from './cat.repository'
import { CatResolver } from './cat.resolver'
import { CatService } from './cat.service'

@Module({
  imports: [OwnerModule],
  providers: [CatResolver, CatService, CatRepository, CatOwnerLoader],
})
export class CatModule {}
