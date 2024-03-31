import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Comment, Node } from '.'

@ObjectType({
  implements: () => [Node],
})
export class User {
  @Field(() => ID)
  readonly id: string

  @Field()
  readonly name: string

  @Field(() => [Comment], { nullable: true })
  readonly comments: Comment[]

  constructor(init?: Partial<User>) {
    Object.assign(this, init)
  }
}
