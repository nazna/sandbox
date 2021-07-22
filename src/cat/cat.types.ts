export interface GetCatsResponse {
  limit: number
  offset: number
  total: number
  cats: GetCatsItem[]
}

export interface GetCatsItem {
  id: string
  name: string
  ownerId: string
}
