import { Module } from '@nestjs/common'
import { OwnerRepository } from './owner.repository'
import { OwnerResolver } from './owner.resolver'
import { OwnerService } from './owner.service'

@Module({
  providers: [OwnerResolver, OwnerService, OwnerRepository],
  exports: [OwnerRepository],
})
export class OwnerModule {}
