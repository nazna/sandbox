import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cat/cat.module'
import { OwnerModule } from './owner/owner.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
      fieldResolverEnhancers: ['filters', 'guards'],
    }),
    CatModule,
    OwnerModule,
  ],
})
export class AppModule {}
