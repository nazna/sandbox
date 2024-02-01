import { ArgumentsHost, BadRequestException, Catch, Logger } from '@nestjs/common'
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql'
import { ExceptionInfo } from '../error-code'

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost): BadRequestException {
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

    return new BadRequestException({
      code: response.code,
      validationErrors: response.validationErrors,
    })
  }
}
