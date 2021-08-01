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

  async findMany(args?: Prisma.CatFindManyArgs): Promise<PrismaCat[]> {
    const result = await this.cat.findMany({
      ...args,
    })

    return result
  }

  // async create(): Promise<Cat> {}

  // async update(): Promise<Cat> {}

  // async delete(): Promise<Cat> {}
}
