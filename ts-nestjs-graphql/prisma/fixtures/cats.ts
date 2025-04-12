import { Prisma } from '@prisma/client'
import { customAlphabet } from 'nanoid'
import { ownerData } from './owners'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10)

export const catData: Prisma.CatCreateInput[] = [
  { id: nanoid(), name: 'Tama', ownerId: ownerData[0].id },
  { id: nanoid(), name: 'Mugi', ownerId: ownerData[1].id },
  { id: nanoid(), name: 'Sora', ownerId: ownerData[2].id },
  { id: nanoid(), name: 'Reo', ownerId: ownerData[3].id },
  { id: nanoid(), name: 'Coco', ownerId: ownerData[0].id },
  { id: nanoid(), name: 'Maron', ownerId: ownerData[0].id },
  { id: nanoid(), name: 'Momo', ownerId: ownerData[0].id },
  { id: nanoid(), name: 'Kinako', ownerId: ownerData[1].id },
  { id: nanoid(), name: 'Rin', ownerId: ownerData[1].id },
  { id: nanoid(), name: 'Runa', ownerId: ownerData[2].id },
  { id: nanoid(), name: 'Maru', ownerId: ownerData[2].id },
  { id: nanoid(), name: 'Rui', ownerId: ownerData[3].id },
  { id: nanoid(), name: 'Reon', ownerId: ownerData[3].id },
  { id: nanoid(), name: 'Mei', ownerId: ownerData[4].id },
  { id: nanoid(), name: 'Hana', ownerId: ownerData[4].id },
  { id: nanoid(), name: 'Moka', ownerId: ownerData[5].id },
  { id: nanoid(), name: 'Beru', ownerId: ownerData[6].id },
  { id: nanoid(), name: 'Mike', ownerId: ownerData[7].id },
  { id: nanoid(), name: 'Nana', ownerId: ownerData[8].id },
  { id: nanoid(), name: 'Hime', ownerId: ownerData[0].id },
]
