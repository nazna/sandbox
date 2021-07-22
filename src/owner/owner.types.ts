export interface GetOwnersResponse {
  limit: number
  offset: number
  total: number
  owners: GetOwnersItem[]
}

export interface GetOwnersItem {
  id: string
  name: string
  catIds: string[]
}
