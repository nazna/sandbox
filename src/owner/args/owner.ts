import { IsNotEmpty, Matches } from 'class-validator'

export class OwnerArgs {
  @IsNotEmpty()
  @Matches(/^o[1-9]\d*$/)
  ownerId: string
}
