import { ArgumentsHost, Catch, InternalServerErrorException, Logger } from '@nestjs/common'
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql'

@Catch(InternalServerErrorException)
export class InternalServerErrorExceptionFilter implements GqlExceptionFilter {
  catch(_exception: InternalServerErrorException, host: ArgumentsHost): InternalServerErrorException {
    const gqlHost = GqlArgumentsHost.create(host)
    const { req } = gqlHost.getArgByIndex(2)

    const info = {
      ua: req.headers['sec-ch-ua'],
      referrer: req.headers.referrer,
      query: req.body.query,
      variables: req.body.variables,
    }

    Logger.error(JSON.stringify(info))

    return new InternalServerErrorException({
      code: 'AAAAAAINTERNAL_SERVER_ERROR',
    })
  }
}
