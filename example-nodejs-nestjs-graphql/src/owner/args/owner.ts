import { IsNotEmpty, Length, Matches } from 'class-validator'

export class OwnerArgs {
  @IsNotEmpty()
  @Matches(/^[a-z]+$/)
  @Length(10, 10)
  readonly ownerId: string

  constructor(init?: Partial<OwnerArgs>) {
    Object.assign(this, init)
  }
}
