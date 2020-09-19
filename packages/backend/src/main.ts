import compression from 'compression'
import config from 'config'
import express, { Express } from 'express'
import helmet from 'helmet'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import books from './books'

const adapter = new FileSync('src/db.json')
export const db = lowdb(adapter)

const { version } = config.get('backend')

const app: Express = express()

app.use(helmet())
app.use(compression())

app.use(`/${version}/books`, books)

export default app
