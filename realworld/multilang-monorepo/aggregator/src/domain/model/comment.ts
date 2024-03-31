import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from '.'

@ObjectType()
export class Comment {
  @Field(() => ID)
  readonly id: string

  @Field()
  readonly body: string

  @Field(() => User, { nullable: true })
  readonly user: User

  constructor(init?: Partial<Comment>) {
    Object.assign(this, init)
  }
}
