import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { resolve } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: ['./src/v1/**/*.graphql'],
  path: resolve(__dirname, './graphql.schema.ts'),
  outputAs: 'class',
})
