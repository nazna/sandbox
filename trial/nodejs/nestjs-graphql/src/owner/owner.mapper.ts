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

  static toEntityConnection(orms: PrismaOwner[], total: number): OwnerConnection {
    return {
      nodes: this.toEntities(orms),
      totalCount: total,
    }
  }
}
