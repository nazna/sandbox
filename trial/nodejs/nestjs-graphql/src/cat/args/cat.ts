import { IsNotEmpty, Length, Matches } from 'class-validator'

export class CatArgs {
  @IsNotEmpty()
  @Matches(/^[a-z]+$/)
  @Length(10, 10)
  readonly catId: string

  constructor(init?: Partial<CatArgs>) {
    Object.assign(this, init)
  }
}
