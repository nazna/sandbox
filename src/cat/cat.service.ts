import { Injectable } from '@nestjs/common'
import { Cat, CatConnection } from '../schema'
import { CatMapper } from './cat.mapper'
import { CatRepository } from './cat.repository'

@Injectable()
export class CatService {
  constructor(private readonly catRepository: CatRepository) {}

  async find(id: string): Promise<Cat> {
    const cat = await this.catRepository.findOne({ where: { id } })

    return CatMapper.toEntity(cat)
  }

  async search(limit: number, offset: number): Promise<CatConnection> {
    const cats = await this.catRepository.findMany({
      skip: offset,
      take: limit,
    })

    return CatMapper.toEntityConnection(cats, limit, offset)
  }
}
