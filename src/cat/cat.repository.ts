import { Injectable, NotFoundException } from '@nestjs/common'
import { Cat as PrismaCat, Prisma } from '@prisma/client'
import { PrismaRepository } from '../helpers/prisma.repository'

@Injectable()
export class CatRepository extends PrismaRepository {
  async findOne(args: Prisma.CatFindUniqueArgs): Promise<PrismaCat> {
    const result = await this.cat.findUnique({
      ...args,
    })

    if (!result) {
      throw new NotFoundException()
    }

    return result
  }

  async findMany(args?: Prisma.CatFindManyArgs): Promise<{ result: PrismaCat[]; total: number }> {
    const [result, total] = await Promise.all([
      this.cat.findMany({
        ...args,
      }),
      this.cat.count({
        where: args?.where,
      }),
    ])

    return { result, total }
  }
}
