import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { AppModule } from './app.module'
import { ErrorCode, ExceptionInfo } from './helpers/error-code'

async function bootstrap() {
  const port = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)

  app.use(helmet({ contentSecurityPolicy: process.env.NODE_CONFIG_ENV === 'production' ? undefined : false }))

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      exceptionFactory: (errors) => {
        const info: ExceptionInfo = {
          code: ErrorCode.E_BAD_USER_INPUT,
          message: 'User input is not valid',
          validationErrors: errors.map((error) => ({
            property: error.property,
            value: error.value,
            constraints: error.constraints,
          })),
        }
        return new BadRequestException(info)
      },
    })
  )

  await app.listen(port, () => {
    Logger.debug(`Server is running on http://localhost:${port}/graphql`)
  })
}

bootstrap()
