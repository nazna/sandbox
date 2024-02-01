import { Injectable, NotFoundException } from '@nestjs/common'
import { ErrorCode, ExceptionInfo } from '../helpers/error-code'
import { Cat, CatConnection } from '../schema'
import { CatMapper } from './cat.mapper'
import { CatRepository } from './cat.repository'

@Injectable()
export class CatService {
  constructor(private readonly catRepository: CatRepository) {}

  async find(id: string): Promise<Cat> {
    const result = await this.catRepository.findOne({ where: { id } })

    if (!result) {
      const info: ExceptionInfo = {
        code: ErrorCode.E_CAT_NOT_FOUND,
        message: `Cat is not found. id:${id}`,
      }
      throw new NotFoundException(info)
    }

    return CatMapper.toEntity(result)
  }

  async search(limit: number, offset: number): Promise<CatConnection> {
    const { result, total } = await this.catRepository.findMany({
      skip: offset,
      take: limit,
    })

    return CatMapper.toEntityConnection(result, total)
  }
}
