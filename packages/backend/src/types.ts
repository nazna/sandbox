export type Author = {
  authorId: number
  name: string
  avatar: string
}

export type Book = {
  bookId: number
  authorId: number
  title: string
  image: string
  publishedAt: string
}
