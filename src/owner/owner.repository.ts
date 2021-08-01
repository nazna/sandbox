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

  async findMany(args?: Prisma.OwnerFindManyArgs): Promise<PrismaOwner[]> {
    const result = await this.owner.findMany({
      ...args,
    })

    return result
  }
}
