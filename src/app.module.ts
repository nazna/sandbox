import { Module } from '@nestjs/common'
import { V1Module } from './v1/v1.module'
import { V2Module } from './v2/v2.module'

@Module({
  imports: [V1Module, V2Module],
})
export class AppModule {}
