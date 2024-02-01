import { BookResponse, books } from '../mocks/book'

async function sleep(ms: number): Promise<NodeJS.Timeout> {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

export async function search(id?: string): Promise<BookResponse> {
  await sleep(300)

  const result = id ? books.filter((book) => book.bookId === id) : books

  if (result.length === 0) {
    throw new Error('404: Not Found')
  }

  return {
    total: result.length,
    items: result,
  }
}
