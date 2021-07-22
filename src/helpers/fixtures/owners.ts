import { GetOwnersResponse } from '../../owner/owner.types'

export const ownersResponse: GetOwnersResponse = {
  limit: 10,
  offset: 0,
  total: 10,
  owners: [
    { id: 'o1', name: 'Sato', catIds: ['c1', 'c5', 'c6', 'c7', 'c20'] },
    { id: 'o2', name: 'Suzuki', catIds: ['c2', 'c8', 'c9'] },
    { id: 'o3', name: 'Takahashi', catIds: ['c3', 'c10', 'c11'] },
    { id: 'o4', name: 'Tanaka', catIds: ['c4', 'c12', 'c13'] },
    { id: 'o5', name: 'Ito', catIds: ['c14', 'c15'] },
    { id: 'o6', name: 'Watanabe', catIds: ['c16'] },
    { id: 'o7', name: 'Yamamoto', catIds: ['c17'] },
    { id: 'o8', name: 'Nakamura', catIds: ['c18'] },
    { id: 'o9', name: 'Kobayashi', catIds: ['c19'] },
    { id: 'o10', name: 'Kato', catIds: [] },
  ],
}
