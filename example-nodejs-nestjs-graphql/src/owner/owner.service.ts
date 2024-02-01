import { Injectable, NotFoundException } from '@nestjs/common'
import { ErrorCode, ExceptionInfo } from '../helpers/error-code'
import { Owner, OwnerConnection } from '../schema'
import { OwnerMapper } from './owner.mapper'
import { OwnerRepository } from './owner.repository'

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async find(id: string): Promise<Owner> {
    const result = await this.ownerRepository.findOne({ where: { id } })

    if (!result) {
      const info: ExceptionInfo = {
        code: ErrorCode.E_CAT_NOT_FOUND,
        message: `Owner is not found. id:${id}`,
      }
      throw new NotFoundException(info)
    }

    return OwnerMapper.toEntity(result)
  }

  async search(limit: number, offset: number): Promise<OwnerConnection> {
    const { result, total } = await this.ownerRepository.findMany({
      skip: offset,
      take: limit,
    })

    return OwnerMapper.toEntityConnection(result, total)
  }
}
