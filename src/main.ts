import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env['PORT'] || 8080

  const app = await NestFactory.create(AppModule)

  await app.listen(port, async () => {
    Logger.debug(`Server is running on ${await app.getUrl()}/api/v1/graphql`)
  })
}

bootstrap()
