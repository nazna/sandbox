import { Controller, Get } from '@nestjs/common'
import { HealthCheck } from './health-check'

@Controller()
export class AppController {
  @Get('/livez')
  async livez(): Promise<HealthCheck> {
    return new HealthCheck()
  }

  @Get('/readyz')
  async readyz(): Promise<HealthCheck> {
    return new HealthCheck()
  }
}
