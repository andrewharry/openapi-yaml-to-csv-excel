import type { Method } from './openapi.d'

export type ConvertedItems = ConvertedItem[]
export type ConvertedItemsEdited = ConvertedItemEdited[]

type ConvertedItem = {
  title: string
  path: string
  summary: string
  description: string
  method: string
  tags: string
  operationId: string
  version?: string
  catalogueId?: string
  build?: string
  deprecated?: string
}

type ConvertedItemEdited = ConvertedItem & { [key: string]: string }
