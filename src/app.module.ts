import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { GraphQLFormattedError } from 'graphql'
import { CatModule } from './cat/cat.module'
import { BadRequestExceptionFilter } from './helpers/filters/bad-request.filter'
import { InternalServerErrorExceptionFilter } from './helpers/filters/internal-server-error.filter'
import { NotFoundExceptionFilter } from './helpers/filters/not-found.filter'
import { OwnerModule } from './owner/owner.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      tracing: true,
      playground: true,
      typePaths: ['./src/schema/*.graphql'],
      fieldResolverEnhancers: ['filters', 'guards'],
      formatError: (error) => {
        const formattedError: GraphQLFormattedError = {
          message: error.message,
          path: error.path,
          extensions: {
            status: error.extensions?.exception?.status || 503,
            code: error.extensions?.exception?.response?.code || error.extensions?.code,
            message: error.extensions?.exception?.message,
            validationErrors: error.extensions?.exception?.response?.validationErrors,
          },
        }
        return formattedError
      },
    }),
    CatModule,
    OwnerModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
