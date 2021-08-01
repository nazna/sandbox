import { Owner as PrismaOwner } from '@prisma/client'
import { Owner, OwnerConnection } from '../schema'

export class OwnerMapper {
  static toEntity(orm: PrismaOwner): Owner {
    return {
      id: orm.id,
      name: orm.name,
    }
  }

  static toEntities(orms: PrismaOwner[]): Owner[] {
    return orms.map(this.toEntity)
  }

  static toEntityConnection(orms: PrismaOwner[], limit: number, offset: number): OwnerConnection {
    return {
      pageInfo: {
        limit,
        offset,
        total: orms.length,
      },
      nodes: this.toEntities(orms),
    }
  }
}
