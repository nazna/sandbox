import { GetCatsResponse } from '../../cat/cat.types'

export const catsResponse: GetCatsResponse = {
  limit: 10,
  offset: 0,
  total: 20,
  cats: [
    { id: 'c1', name: 'Tama', ownerId: 'o1' },
    { id: 'c2', name: 'Mugi', ownerId: 'o2' },
    { id: 'c3', name: 'Sora', ownerId: 'o3' },
    { id: 'c4', name: 'Reo', ownerId: 'o4' },
    { id: 'c5', name: 'Coco', ownerId: 'o1' },
    { id: 'c6', name: 'Maron', ownerId: 'o1' },
    { id: 'c7', name: 'Momo', ownerId: 'o1' },
    { id: 'c8', name: 'Kinako', ownerId: 'o2' },
    { id: 'c9', name: 'Rin', ownerId: 'o2' },
    { id: 'c10', name: 'Runa', ownerId: 'o3' },
    { id: 'c11', name: 'Maru', ownerId: 'o3' },
    { id: 'c12', name: 'Rui', ownerId: 'o4' },
    { id: 'c13', name: 'Reon', ownerId: 'o4' },
    { id: 'c14', name: 'Mei', ownerId: 'o5' },
    { id: 'c15', name: 'Hana', ownerId: 'o5' },
    { id: 'c16', name: 'Moka', ownerId: 'o6' },
    { id: 'c17', name: 'Beru', ownerId: 'o7' },
    { id: 'c18', name: 'Mike', ownerId: 'o8' },
    { id: 'c19', name: 'Nana', ownerId: 'o9' },
    { id: 'c20', name: 'Hime', ownerId: 'o1' },
  ],
}
