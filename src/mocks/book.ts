export interface BookResponse {
  total: number
  items: BookResponseItem[]
}

export interface BookResponseItem {
  bookId: string
  title: string
  description?: string
}

export const books: BookResponseItem[] = [
  {
    bookId: '1',
    title: 'Book 1',
    description: 'You can like this',
  },
  {
    bookId: '2',
    title: 'Book 2',
    description: 'You can unliked this',
  },
  {
    bookId: '3',
    title: 'Book 3',
    description: 'You cannot like this because this is self book',
  },
]
