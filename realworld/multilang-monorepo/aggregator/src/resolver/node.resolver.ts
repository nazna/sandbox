import { Args, Query, Resolver } from '@nestjs/graphql'
import { fromGlobalId } from '../common/global-id'
import { Node } from '../domain/model'
import { UserService } from '../service/user.service'

@Resolver(() => Node)
export class NodeResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Node)
  async node(@Args('id') globalId: string): Promise<Node> {
    const { type, id } = fromGlobalId(globalId)

    switch (type) {
      case 'User':
        return await this.userService.findById(id)
      default:
        // TODO: change to custom exception
        throw new Error('Unexpected type')
    }
  }

  @Query(() => [Node])
  async nodes(): Promise<Node[]> {
    // TODO: separete by type and invoke loader
    return []
  }
}
