import { Args, Query, Resolver } from '@nestjs/graphql'
import { User } from '../domain/model'
import { UserService } from '../service/user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    return await this.userService.findById(id)
  }
}
