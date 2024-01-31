import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './users';
import type { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async user(@Args("id") id: string): Promise<User> {
    return this.usersService.find(id)
  }
}
