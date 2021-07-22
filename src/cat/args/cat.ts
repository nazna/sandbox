import { IsNotEmpty, Matches } from 'class-validator'

export class CatArgs {
  @IsNotEmpty()
  @Matches(/^c[1-9]\d*$/)
  catId: string
}
