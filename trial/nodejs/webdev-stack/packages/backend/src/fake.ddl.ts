import faker from 'faker'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { Author, Book } from './types'

const adapter = new FileSync('src/db.json')
const db = lowdb(adapter)

db.defaults({ books: [], authors: [] }).write()

let offset = 0

const books = [...Array(24)].map<Book>((_, index) => ({
  bookId: index,
  authorId: Math.random() > 0.5 ? offset++ : offset,
  title: faker.hacker.phrase(),
  image: faker.image.imageUrl(),
  publishedAt: faker.date.past().toString(),
}))

const authors = [...Array(offset)].map<Author>((_, index) => ({
  authorId: index,
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
}))

db.set('books', books).write()
db.set('authors', authors).write()
