import { ArgumentsHost, Catch, Logger, NotFoundException } from '@nestjs/common'
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql'
import { ExceptionInfo } from '../error-code'

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements GqlExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost): NotFoundException {
    const response = exception.getResponse() as ExceptionInfo

    const gqlHost = GqlArgumentsHost.create(host)
    const { req } = gqlHost.getArgByIndex(2)

    const info = {
      code: response.code,
      message: response.message,
      ua: req.headers['sec-ch-ua'],
      referrer: req.headers.referrer,
      query: req.body.query,
      variables: req.body.variables,
    }

    Logger.warn(JSON.stringify(info))

    return new NotFoundException({
      code: response.code,
    })
  }
}
