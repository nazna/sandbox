import { BookResponse, BookResponseItem, books } from '../mocks/book'

async function sleep(ms: number): Promise<NodeJS.Timeout> {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}

export async function find(id: string): Promise<BookResponseItem> {
  await sleep(500)

  const result = books.find((book) => book.bookId === id)

  if (!result) {
    throw new Error('404: Not found')
  }

  return result
}

export async function search(): Promise<BookResponse> {
  await sleep(500)

  return {
    total: books.length,
    items: books,
  }
}
