import express, { Response } from 'express'
import { db } from '../main'
import { Book } from '../types'

const router = express.Router()

router.get('/', (req, res: Response<Book[]>) => {
  const limit = Number(req.query.limit) || 10
  const offset = Number(req.query.offset) || 0

  try {
    const data: Book[] = db
      .get('books')
      .slice(offset, offset + limit)
      .value()

    if (data.length === 0) {
      return res.sendStatus(404)
    }

    return res.json(data)
  } catch (error) {
    return res.sendStatus(500)
  }
})

router.get('/:bookId', (req, res: Response<Book>) => {
  const bookId = Number(req.params.bookId)

  if (Number.isNaN(bookId)) {
    return res.sendStatus(400)
  }

  try {
    const data: Book = db
      .get('books')
      .find((e: Book) => e.bookId === bookId)
      .value()

    if (!data) {
      return res.sendStatus(404)
    }

    return res.json(data)
  } catch (error) {
    return res.sendStatus(500)
  }
})

export default router
