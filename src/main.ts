import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const version = 'v2'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(3000, () => {
    Logger.debug(`Server is running on http://localhost:3000/${version}`)
  })
}

bootstrap()
