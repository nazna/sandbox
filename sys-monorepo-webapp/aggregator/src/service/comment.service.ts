import { Injectable } from '@nestjs/common'
import { Comment } from '../domain/model'

@Injectable()
export class CommentService {
  async findById(id: string): Promise<Comment> {
    const result = new Comment({ id: `c-${id}`, body: 'Hello, world!' })
    return result
  }
}
