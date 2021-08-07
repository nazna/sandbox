import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)

  app.use(helmet())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      disableErrorMessages: true,
    })
  )

  await app.listen(port, () => {
    Logger.debug(`Server is running on http://localhost:${port}/graphql`)
  })
}

bootstrap()
