import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Like {
  @Field({ description: 'The number of likes' })
  count: number

  @Field({
    description: `The status of like
- true is liked
- false is not liked`,
  })
  status: boolean

  @Field({ description: 'Whether you can like' })
  available: boolean
}
