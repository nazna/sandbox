import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { resolve } from 'path'

export function typegen() {
  const definitionsFactory = new GraphQLDefinitionsFactory()

  definitionsFactory.generate({
    typePaths: ['./src/v3/**/*.graphql'],
    path: resolve(__dirname, './graphql.schema.ts'),
    outputAs: 'class',
  })
}
