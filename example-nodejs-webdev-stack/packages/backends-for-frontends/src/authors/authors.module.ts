import { HttpModule, Module } from '@nestjs/common'
import { AuthorsResolver } from './authors.resolver'
import { AuthorsService } from './authors.service'

@Module({
  imports: [HttpModule],
  providers: [AuthorsResolver, AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
