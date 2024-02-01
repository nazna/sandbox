import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)
  const { host, port } = config.get('backends-for-frontends')

  await app.listen(port, () => {
    Logger.log(`Server is running on http://${host}:${port}/graphql`)
  })
}

bootstrap()
