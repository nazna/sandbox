import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id!: string

  @Field()
  readonly name!: string

  @Field()
  readonly description?: string

  constructor(init: Partial<User>) {
    Object.assign(this, init)
  }
}
