export interface LikeResponse {
  bookId: string
  count: number
  status: boolean
  available: boolean
}

export const likes: LikeResponse[] = [
  {
    bookId: '1',
    count: 3,
    status: false,
    available: true,
  },
  {
    bookId: '2',
    count: 5,
    status: true,
    available: true,
  },
  {
    bookId: '3',
    count: 1,
    status: false,
    available: false,
  },
]
