import { PrismaClient } from '@prisma/client'
import { catData } from './fixtures/cats'
import { ownerData } from './fixtures/owners'

async function seedCats(prisma: PrismaClient) {
  for (const data of catData) {
    const cat = await prisma.cat.create({
      data,
    })
    console.debug(`Created cat with id: ${cat.id}`)
  }
}

async function seedOwners(prisma: PrismaClient) {
  for (const data of ownerData) {
    const owner = await prisma.owner.create({
      data,
    })
    console.debug(`Created owner with id: ${owner.id}`)
  }
}

async function main() {
  const prisma = new PrismaClient()

  try {
    await seedCats(prisma)
    await seedOwners(prisma)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
