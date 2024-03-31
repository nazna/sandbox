import { HttpModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { Author } from '../graphql.schema'
import { AuthorsResolver } from './authors.resolver'
import { AuthorsService } from './authors.service'

describe('AuthorsResolver', () => {
  let resolver: AuthorsResolver
  let service: AuthorsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, HttpModule],
      providers: [AuthorsResolver, AuthorsService],
    }).compile()

    resolver = module.get<AuthorsResolver>(AuthorsResolver)
    service = module.get<AuthorsService>(AuthorsService)
  })

  test('functions should be defined', () => {
    expect(resolver).toBeDefined()
    expect(resolver.authors).toBeDefined()
    expect(resolver.author).toBeDefined()
  })

  test('Query.authors should work successfully', async () => {
    // setup
    expect.assertions(3)

    const expected: Author[] = [
      {
        authorId: '1',
        name: 'name',
        avatar: 'http://example.com/avatar.png',
      },
    ]

    jest.spyOn(service, 'findAll').mockResolvedValue([
      {
        authorId: '1',
        name: 'name',
        avatar: 'http://example.com/avatar.png',
      },
    ])

    const limit = 4
    const offset = 0

    // when
    const received = await resolver.authors(limit, offset)

    // then
    expect(received).toStrictEqual(expected)
    expect(service.findAll).toHaveBeenCalledTimes(1)
    expect(service.findAll).toHaveBeenCalledWith(limit, offset)
  })

  test('Query.author should work successfully', async () => {
    // setup
    expect.assertions(3)

    const expected: Author = {
      authorId: '1',
      name: 'name',
      avatar: 'http://example.com/avatar.png',
    }

    jest.spyOn(service, 'findById').mockResolvedValue({
      authorId: '1',
      name: 'name',
      avatar: 'http://example.com/avatar.png',
    })

    const authorId = '1'

    // when
    const received = await resolver.author(authorId)

    // then
    expect(received).toStrictEqual(expected)
    expect(service.findById).toHaveBeenCalledTimes(1)
    expect(service.findById).toHaveBeenCalledWith(authorId)
  })
})
