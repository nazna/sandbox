// TODO: graphql-relay-js に乗り換えを検討する
// @ref: https://github.com/graphql/graphql-relay-js
export function toGlobalId(type: string, id: string | number): string {
  return Buffer.from(`${type}:${id}`).toString('base64')
}

export function fromGlobalId(globalId: string) {
  const decoded = Buffer.from(globalId, 'base64').toString()
  const [type, id] = decoded.split(':')
  return { type, id }
}
