import { IsNotEmpty, Max, Min } from 'class-validator'

export class CatsArgs {
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  limit: number

  @IsNotEmpty()
  @Min(0)
  @Max(20)
  offset: number
}
