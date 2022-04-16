export class HealthCheck {
  readonly status!: string

  constructor() {
    this.status = 'ok'
  }
}
