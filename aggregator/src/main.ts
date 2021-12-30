import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import fastifyHelmet from 'fastify-helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT || 8081

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  await app.register(fastifyHelmet, {
    contentSecurityPolicy: false,
  })

  await app.listen(port, async () => {
    Logger.debug(`Server is running on ${await app.getUrl()}/graphql`)
  })
}

bootstrap()
