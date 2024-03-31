import { HttpModule, HttpService, HttpStatus, InternalServerErrorException } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { AxiosResponse } from 'axios'
import { of, throwError } from 'rxjs'
import configure from '../config'
import { Author } from '../graphql.schema'
import { AuthorsService } from './authors.service'

describe('AuthorsService', () => {
  let service: AuthorsService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [configure] }), HttpModule],
      providers: [AuthorsService],
    }).compile()

    service = module.get<AuthorsService>(AuthorsService)
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

      const expected: Author[] = [
        {
          authorId: '1',
          name: 'name',
          avatar: 'http://example.com/avatar.png',
        },
      ]

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: [
            {
              authorId: '1',
              name: 'name',
              avatar: 'http://example.com/avatar.png',
            },
          ] as Author[],
        } as AxiosResponse)
      )

      const limit = 4
      const offset = 0

      // when
      const received = await service.findAll(limit, offset)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith('http://localhost:5000/v1/authors', {
        params: { limit, offset },
      })
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const limit = 4
      const offset = 0

      // when
      try {
        await service.findAll(limit, offset)
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

      const expected: Author = {
        authorId: '1',
        name: 'name',
        avatar: 'http://example.com/avatar.png',
      }

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: {
            authorId: '1',
            name: 'name',
            avatar: 'http://example.com/avatar.png',
          } as Author,
        } as AxiosResponse)
      )

      const authorId = '1'

      // when
      const received = await service.findById(authorId)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith(`http://localhost:5000/v1/authors/${authorId}`)
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const authorId = '1'

      // when
      try {
        await service.findById(authorId)
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

      const expected: Author[] = [
        {
          authorId: '1',
          name: 'name',
          avatar: 'http://example.com/avatar.png',
        },
        {
          authorId: '2',
          name: 'name',
          avatar: 'http://example.com/avatar.png',
        },
      ]

      jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          data: [
            {
              authorId: '1',
              name: 'name',
              avatar: 'http://example.com/avatar.png',
            },
            {
              authorId: '2',
              name: 'name',
              avatar: 'http://example.com/avatar.png',
            },
          ] as Author[],
        } as AxiosResponse)
      )

      const authorIds = ['1', '2']

      // when
      const received = await service.findByIds(authorIds)

      // then
      expect(received).toStrictEqual(expected)
      expect(httpService.get).toHaveBeenCalledTimes(1)
      expect(httpService.get).toHaveBeenCalledWith(`http://localhost:5000/v1/authors/${authorIds.join(',')}`)
    })

    test('when panic happened', async () => {
      // setup
      expect.assertions(2)

      jest.spyOn(httpService, 'get').mockReturnValue(throwError(new InternalServerErrorException()))

      const authorIds = ['1', '2']

      // when
      try {
        await service.findByIds(authorIds)
      } catch (error) {
        // then
        expect(error).toBeInstanceOf(InternalServerErrorException)
        expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR)
      }
    })
  })
})
