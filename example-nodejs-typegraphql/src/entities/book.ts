import { Field, ID, ObjectType } from 'type-graphql'
import { Like } from './like'

@ObjectType()
export class Book {
  @Field(() => ID, { description: 'The book id' })
  id: string

  @Field({ description: 'The title of the book' })
  title: string

  @Field({ nullable: true, description: 'The description about the book' })
  description?: string

  @Field(() => Like, { description: 'The like information of the book' })
  like: Like
}
