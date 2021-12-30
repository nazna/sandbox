import { Injectable } from '@nestjs/common'
import { User } from '../domain/model'

@Injectable()
export class UserService {
  async findById(id: string): Promise<User> {
    const result = new User({ id: `u-${id}`, name: 'John' })
    return result
  }
}
