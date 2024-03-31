import express, { Response } from 'express'
import { db } from '../main'
import { Author } from '../types'

const router = express.Router()

router.get('/', (req, res: Response<Author[]>) => {
  const limit = Number(req.query.limit) || 10
  const offset = Number(req.query.offset) || 0

  try {
    const data: Author[] = db
      .get('authors')
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

router.get('/:authorId', (req, res: Response<Author>) => {
  const authorId = Number(req.params.authorId)

  if (Number.isNaN(authorId)) {
    return res.sendStatus(400)
  }

  try {
    const data: Author = db
      .get('authors')
      .find((e: Author) => e.authorId === authorId)
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
