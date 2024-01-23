import type { Method } from './openapi.d'

export type ConvertedItems = ConvertedItem[]
export type ConvertedItemsEdited = ConvertedItemEdited[]

type ConvertedItem = {
  path: string
  summary: string
  description: string
  method: Method
  tags: string
  operationId: string
  catalogueId?: string
}

type ConvertedItemEdited = ConvertedItem & { [key: string]: string }
