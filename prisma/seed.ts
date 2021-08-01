import { Prisma, PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'

const catData: Prisma.CatCreateInput[] = [
  {
    id: nanoid(),
    name: 'Testname',
    ownerId: nanoid(),
  },
]

async function seed(prisma: PrismaClient) {
  for (const data of catData) {
    const cat = await prisma.cat.create({
      data,
    })
    console.debug(`Created cat with id: ${cat.id}`)
  }
}

async function main() {
  const prisma = new PrismaClient()

  try {
    await seed(prisma)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
