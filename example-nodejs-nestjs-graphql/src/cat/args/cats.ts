import { IsEnum, IsNotEmpty, Max, Min } from 'class-validator'
import { CatSort } from '../../schema'

export class CatsArgs {
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  readonly limit: number

  @IsNotEmpty()
  @Min(0)
  @Max(20)
  readonly offset: number

  @IsNotEmpty()
  @IsEnum(CatSort)
  readonly sort: CatSort

  constructor(init?: Partial<CatsArgs>) {
    Object.assign(this, init)
  }
}
