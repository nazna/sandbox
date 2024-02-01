import { Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

export abstract class PrismaRepository
  extends PrismaClient<Prisma.PrismaClientOptions, 'query'>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    })

    this.$on('query', (e: Prisma.QueryEvent) => {
      const params = JSON.parse(e.params)
      const sql = params
        .reduce((acc: string, cur: number) => acc.replace(/\?/, String(cur)), e.query)
        .replace(/`(.+?)`/g, '$1')

      Logger.debug(`[Prisma:query] ${e.duration}ms ${sql}`)
    })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
