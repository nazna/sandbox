import { Module } from '@nestjs/common'
import { NodeResolver } from '../resolver/node.resolver'
import { UserService } from '../service/user.service'

@Module({
  providers: [NodeResolver, UserService],
})
export class NodeModule {}
