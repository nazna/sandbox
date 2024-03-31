export interface Book {
  bookId: string
  authorId: string
  title: string
  image: string
  publishedAt: string
}

export interface BookData {
  books: Book[]
}

export interface Author {
  authorId: string
  name: string
  avatar: string
}

export interface AuthorData {
  authors: Author[]
}
