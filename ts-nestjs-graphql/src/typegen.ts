import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { resolve } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: ['./src/schema/*.graphql'],
  path: resolve(__dirname, './schema.ts'),
  outputAs: 'class',
})
