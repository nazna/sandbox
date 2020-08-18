import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'
import { BooksResolver } from './books.resolver'
import { BooksService } from './books.service'

describe('BooksResolver', () => {
  let resolver: BooksResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, BooksResolver, BooksService],
    }).compile()

    resolver = module.get<BooksResolver>(BooksResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
