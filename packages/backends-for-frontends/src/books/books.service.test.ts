import { HttpModule, HttpService, HttpStatus, InternalServerErrorException } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { AxiosResponse } from 'axios'
import { of, throwError } from 'rxjs'
import configure from '../config'
import { Book, BookOrder, BookOrderField, OrderDirection } from '../graphql.schema'
import { BooksService } from './books.service'

describe('BooksService', () => {
  let service: BooksService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [configure] }), HttpModule],
      providers: [BooksService],
    }).compile()

    service = module.get<BooksService>(BooksService)
    httpService = module.get<HttpService>(HttpService)
  })

  test('functions should be defined', () => {
    expect(service).toBeDefined()
    expect(service.findAll).toBeDefined()
    expect(service.findById).toBeDefined()
    expect(service.findByIds).toBeDefined()
  })

  describe('Service.findAll', () => {
    test('should success', async () => {
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

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: [
            {
              bookId: '1',
              authorId: '1',
              title: 'title',
              image: 'http://example.com/image.jpg',
              publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
            },
          ] as Book[],
        } as AxiosResponse)
      )

      const limit = 4
      const offset = 0
      const orderBy: BookOrder = { field: BookOrderField.BOOK_ID, direction: OrderDirection.ASC }

      // when
      const received = await service.findAll(limit, offset, orderBy)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith('http://localhost:5000/v1/books', {
        params: { limit, offset, orderBy },
      })
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const limit = 4
      const offset = 0
      const orderBy: BookOrder = { field: BookOrderField.BOOK_ID, direction: OrderDirection.ASC }

      // when
      try {
        await service.findAll(limit, offset, orderBy)
      } catch (error) {
        // then
        expect(error).toBeInstanceOf(InternalServerErrorException)
        expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR)
      }
    })
  })

  describe('Service.findById', () => {
    test('should success', async () => {
      // setup
      expect.assertions(3)

      const expected: Book = {
        bookId: '1',
        authorId: '1',
        title: 'title',
        image: 'http://example.com/image.jpg',
        publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
      }

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: {
            bookId: '1',
            authorId: '1',
            title: 'title',
            image: 'http://example.com/image.jpg',
            publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
          } as Book,
        } as AxiosResponse)
      )

      const bookId = '1'

      // when
      const received = await service.findById(bookId)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith(`http://localhost:5000/v1/books/${bookId}`)
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const bookId = '1'

      // when
      try {
        await service.findById(bookId)
      } catch (error) {
        // then
        expect(error).toBeInstanceOf(InternalServerErrorException)
        expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR)
      }
    })
  })

  describe('Service.findByIds', () => {
    test('should success', async () => {
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
        {
          bookId: '2',
          authorId: '2',
          title: 'title',
          image: 'http://example.com/image.jpg',
          publishedAt: 'Sun Jan 02 2020 00:00:00 GMT+0900',
        },
      ]

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: [
            {
              bookId: '1',
              authorId: '1',
              title: 'title',
              image: 'http://example.com/image.jpg',
              publishedAt: 'Sun Jan 01 2020 00:00:00 GMT+0900',
            },
            {
              bookId: '2',
              authorId: '2',
              title: 'title',
              image: 'http://example.com/image.jpg',
              publishedAt: 'Sun Jan 02 2020 00:00:00 GMT+0900',
            },
          ] as Book[],
        } as AxiosResponse)
      )

      const bookIds = ['1', '2']

      // when
      const received = await service.findByIds(bookIds)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith(`http://localhost:5000/v1/books/${bookIds.join(',')}`)
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const bookIds = ['1', '2']

      // when
      try {
        await service.findByIds(bookIds)
      } catch (error) {
        // then
        expect(error).toBeInstanceOf(InternalServerErrorException)
        expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR)
      }
    })
  })
})
