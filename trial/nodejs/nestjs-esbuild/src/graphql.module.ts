import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'
import { resolve } from 'node:path'

export const GraphQLModule = NestGraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  path: '/api/v1/graphql',
  debug: true,
  playground: true,
  autoSchemaFile: resolve(process.cwd(), 'src/schema.graphql'),
  sortSchema: true,
})
