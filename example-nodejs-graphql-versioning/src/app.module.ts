import { Module } from '@nestjs/common'
import { V1Module } from './v1/v1.module'
import { V2Module } from './v2/v2.module'
import { V3Module } from './v3/v3.module'

@Module({
  imports: [V1Module, V2Module, V3Module],
})
export class AppModule {}
