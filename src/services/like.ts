import { LikeResponse, likes } from '../mocks/like'

async function sleep(ms: number): Promise<NodeJS.Timeout> {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

export async function find(id: string): Promise<LikeResponse> {
  await sleep(500)

  const result = likes.find((like) => like.bookId === id)

  if (!result) {
    throw new Error('404: Not found')
  }

  return result
}
