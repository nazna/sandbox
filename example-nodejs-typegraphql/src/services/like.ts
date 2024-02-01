import { LikeResponse, LikeResponseItem, likes } from '../mocks/like'

async function sleep(ms: number): Promise<NodeJS.Timeout> {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

export async function search(ids: readonly string[]): Promise<LikeResponse> {
  await sleep(300)

  const result = likes.filter((like) => ids.includes(like.bookId))

  if (result.length === 0) {
    throw new Error('404: Not found')
  }

  return {
    total: result.length,
    items: result,
  }
}

export async function add(id: string): Promise<LikeResponseItem> {
  await sleep(500)

  const result = likes.find((like) => like.bookId === id)

  if (result === undefined) {
    throw new Error('404: Not Found')
  }

  if (result.count === 0) {
    throw new Error('403: Forbidden')
  }

  if (result.status === true) {
    throw new Error('403: Forbidden')
  }

  if (result.available === false) {
    throw new Error('403: Forbidden')
  }

  return {
    ...result,
    count: result.count - 1,
    status: !result.status,
  }
}

export async function remove(id: string): Promise<LikeResponseItem> {
  await sleep(500)

  const result = likes.find((like) => like.bookId === id)

  if (result === undefined) {
    throw new Error('404: Not Found')
  }

  if (result.status === false) {
    throw new Error('403: Forbidden')
  }

  if (result.available === false) {
    throw new Error('403: Forbidden')
  }

  return {
    ...result,
    count: result.count + 1,
    status: !result.status,
  }
}
