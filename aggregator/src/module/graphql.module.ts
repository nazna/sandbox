import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'
import { resolve } from 'node:path'

export const GraphQLModule = NestGraphQLModule.forRoot({
  debug: true,
  playground: true,
  autoSchemaFile: resolve(process.cwd(), 'src/schema.graphql'),
  sortSchema: true,
})
