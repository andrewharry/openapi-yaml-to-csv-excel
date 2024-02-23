import type { OpenApi, ConvertedItems, Method, ConvertedItem, ConvertedItemsEdited } from '@/@types'
import { methods } from '@/constants'

export const convertOpenApiJsonToArray = (jsonData: OpenApi): ConvertedItems => {
  const pathData = jsonData.paths
  if (!pathData) return []

  const result = [] as ConvertedItems
  for (const [path, pathItem] of Object.entries(pathData)) {
    methods.forEach((method: Method) => {
      const methodItem = pathItem[method]
      if (!methodItem) return

      result.push({
        title: jsonData.info.title,
        path: path,
        summary: methodItem.summary || '',
        description: (methodItem.description || '').substring(0, 200),
        method: method.toUpperCase(),
        tags: methodItem.tags ? methodItem.tags.join(' ') : '',
        operationId: methodItem.operationId || '',
        catalogueId: (methodItem as any)['x-catalogue-id'] || ''
      })
    })
  }
  return result
}

export const updateApiDoc = (
  newDoc: OpenApi,
  oldDoc: ConvertedItemsEdited
): ConvertedItemsEdited => {
  const pathData = newDoc.paths
  if (!pathData) return oldDoc

  // Filter CsvEdited by operationIds in newDoc
  const operationIds: string[] = []
  Object.values(pathData).forEach((pathItem) => {
    methods.forEach((method: Method) => {
      const methodItem = pathItem[method]
      if (methodItem && methodItem.operationId) {
        operationIds.push(methodItem.operationId)
      }
    })
  })
  const updatedDoc = oldDoc.filter((doc) => operationIds.includes(doc.operationId))

  // Update oldDoc
  for (const [path, pathItem] of Object.entries(pathData)) {
    methods.forEach((method: Method) => {
      const methodItem = pathItem[method]
      if (!methodItem) return

      const index = updatedDoc.findIndex((doc) => doc.operationId === methodItem.operationId)
      const newCsvItem = {
        openapi: newDoc.openapi,
        title: newDoc.info.title,
        path: path,
        summary: pathItem.summary || '',
        description: pathItem.description || '',
        method: method.toUpperCase(),
        tags: methodItem.tags ? methodItem.tags.join(' ') : '',
        summaryMethod: methodItem.summary || '',
        descriptionMethod: methodItem.description || '',
        operationId: methodItem.operationId || '',
        catalogueId: (methodItem as any)['x-catalogue-id'] || ''
      }
      if (index >= 0) {
        updatedDoc[index] = {
          ...oldDoc[index], // If newDoc's operationId exists in oldDoc, keep user added columns.
          ...newCsvItem, // Only update newDoc's columns.
        }
      } else {
        updatedDoc.push(newCsvItem)
      }
    })
  }

  // Sort in the same order as operationId in input yaml file
  updatedDoc.sort(
    (prev, next) => operationIds.indexOf(prev.operationId) - operationIds.indexOf(next.operationId)
  )

  return updatedDoc
}
