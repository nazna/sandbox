import { Injectable, NotFoundException } from '@nestjs/common'
import { Owner as PrismaOwner, Prisma } from '@prisma/client'
import { PrismaRepository } from '../helpers/prisma.repository'

@Injectable()
export class OwnerRepository extends PrismaRepository {
  async findOne(args: Prisma.OwnerFindUniqueArgs): Promise<PrismaOwner> {
    const result = await this.owner.findUnique({
      ...args,
    })

    if (!result) {
      throw new NotFoundException()
    }

    return result
  }

  async findMany(args?: Prisma.OwnerFindManyArgs): Promise<{ result: PrismaOwner[]; total: number }> {
    const [result, total] = await Promise.all([
      this.owner.findMany({
        ...args,
      }),
      this.owner.count({
        where: args?.where,
      }),
    ])

    return { result, total }
  }
}
