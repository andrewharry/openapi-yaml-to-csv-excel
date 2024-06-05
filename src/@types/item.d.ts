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
  catalogueId?: string
  buildStatus?: string
}

type ConvertedItemEdited = ConvertedItem & { [key: string]: string }
