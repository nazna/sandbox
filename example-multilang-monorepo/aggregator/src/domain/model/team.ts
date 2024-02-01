import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Team {
  @Field(() => ID)
  readonly id: string

  constructor(init?: Partial<Team>) {
    Object.assign(this, init)
  }
}
