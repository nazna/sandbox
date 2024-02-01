import { IsEnum, IsNotEmpty, Max, Min } from 'class-validator'
import { OwnerSort } from '../../schema'

export class OwnersArgs {
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  readonly limit: number

  @IsNotEmpty()
  @Min(0)
  @Max(20)
  readonly offset: number

  @IsNotEmpty()
  @IsEnum(OwnerSort)
  readonly sort: OwnerSort

  constructor(init?: Partial<OwnersArgs>) {
    Object.assign(this, init)
  }
}
