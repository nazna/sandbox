import { Field, InputType } from 'type-graphql'

@InputType()
export class AddLikeInput {
  @Field({ description: 'The target book to add like' })
  bookId: string
}

@InputType()
export class RemoveLikeInput {
  @Field({ description: 'The target book to delete like' })
  bookId: string
}
