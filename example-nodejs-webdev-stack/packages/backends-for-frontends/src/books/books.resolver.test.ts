import { HttpModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { Book, BookOrder, BookOrderField, OrderDirection } from '../graphql.schema'
import { BooksResolver } from './books.resolver'
import { BooksService } from './books.service'

describe('BooksResolver', () => {
  let resolver: BooksResolver
  let service: BooksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, HttpModule],
      providers: [BooksResolver, BooksService],
    }).compile()

    resolver = module.get<BooksResolver>(BooksResolver)
    service = module.get<BooksService>(BooksService)
  })

  test('functions should be defined', () => {
    expect(resolver).toBeDefined()
    expect(resolver.books).toBeDefined()
    expect(resolver.book).toBeDefined()
  })

  test('Query.books should work successfully', async () => {
    // setup
    expect.assertions(3)

    const expected: Book[] = [
      {
        bookId: '1',
        authorId: '1',
        title: 'title',
        image: 'http://example.com/image.jpg',
        publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
      },
    ]

    jest.spyOn(service, 'findAll').mockResolvedValue([
      {
        bookId: '1',
        authorId: '1',
        title: 'title',
        image: 'http://example.com/image.jpg',
        publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
      },
    ])

    const limit = 4
    const offset = 0
    const orderBy: BookOrder = { field: BookOrderField.BOOK_ID, direction: OrderDirection.ASC }

    // when
    const received = await resolver.books(limit, offset, orderBy)

    // then
    expect(received).toStrictEqual(expected)
    expect(service.findAll).toHaveBeenCalledTimes(1)
    expect(service.findAll).toHaveBeenCalledWith(limit, offset, orderBy)
  })

  test('Query.book should work successfully', async () => {
    // setup
    expect.assertions(3)

    const expected: Book = {
      bookId: '1',
      authorId: '1',
      title: 'title',
      image: 'http://example.com/image.jpg',
      publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
    }

    jest.spyOn(service, 'findById').mockResolvedValue({
      bookId: '1',
      authorId: '1',
      title: 'title',
      image: 'http://example.com/image.jpg',
      publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
    })

    const bookId = '1'

    // when
    const received = await resolver.book(bookId)

    // then
    expect(received).toStrictEqual(expected)
    expect(service.findById).toHaveBeenCalledTimes(1)
    expect(service.findById).toHaveBeenCalledWith(bookId)
  })
})
