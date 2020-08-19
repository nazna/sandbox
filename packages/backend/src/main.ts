import compression from 'compression'
import config from 'config'
import express, { Express } from 'express'
import helmet from 'helmet'
import books from './books'

const { version } = config.get('backend')

const app: Express = express()

app.use(helmet())
app.use(compression())

app.use(`/${version}/books`, books)

export default app
