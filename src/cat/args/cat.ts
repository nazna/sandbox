import { IsNotEmpty, Matches } from 'class-validator'

export class CatArgs {
  @IsNotEmpty()
  @Matches(/^[A-Za-z0-9_-]+$/)
  readonly catId: string

  constructor(init?: Partial<CatArgs>) {
    Object.assign(this, init)
  }
}
