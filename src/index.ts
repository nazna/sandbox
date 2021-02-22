import { ApolloServer } from 'apollo-server'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { BookResolver } from './resolvers/book'
import { BookFieldResolver } from './resolvers/book.field'
import { LikeResolver } from './resolvers/like'

async function bootstrap(): Promise<void> {
  const schema = await buildSchema({
    resolvers: [BookResolver, BookFieldResolver, LikeResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
    playground: true,
  })

  const { url } = await server.listen(3000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
