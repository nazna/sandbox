import { Injectable } from '@nestjs/common';
import { User } from './users';

@Injectable()
export class UsersService {
  async find(id: string): Promise<User> {
    return new User({ id, name: "Alice", description: "I am genesis" })
  }
}
