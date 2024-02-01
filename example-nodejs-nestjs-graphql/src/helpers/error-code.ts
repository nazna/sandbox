import { ValidationError } from 'class-validator'

export const ErrorCode = {
  E_BAD_USER_INPUT: 'E_BAD_USER_INPUT',
  E_CAT_NOT_FOUND: 'E_CAT_NOT_FOUND',
  E_OWNER_NOT_FOUND: 'E_OWNER_NOT_FOUND',
  E_UNKNOWN: 'E_UNKNOWN',
} as const

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode]

export interface ExceptionInfo {
  code: ErrorCode
  message: string
  validationErrors?: Pick<ValidationError, 'property' | 'value' | 'constraints'>[]
}
