import { Cat as PrismaCat } from '@prisma/client'
import { Cat, CatConnection } from '../schema'

export class CatMapper {
  static toEntity(orm: PrismaCat): Cat {
    return {
      id: orm.id,
      name: orm.name,
      ownerId: orm.ownerId,
    }
  }

  static toEntities(orms: PrismaCat[]): Cat[] {
    return orms.map(this.toEntity)
  }

  static toEntityConnection(orms: PrismaCat[], limit: number, offset: number): CatConnection {
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
