import { Prisma } from '@prisma/client'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10)

export const ownerData: Prisma.OwnerCreateInput[] = [
  { id: nanoid(), name: 'Sato' },
  { id: nanoid(), name: 'Suzuki' },
  { id: nanoid(), name: 'Takahashi' },
  { id: nanoid(), name: 'Tanaka' },
  { id: nanoid(), name: 'Ito' },
  { id: nanoid(), name: 'Watanabe' },
  { id: nanoid(), name: 'Yamamoto' },
  { id: nanoid(), name: 'Nakamura' },
  { id: nanoid(), name: 'Kobayashi' },
  { id: nanoid(), name: 'Kato' },
]
