import type { methods } from '@/constants'

export type OpenApi = {
  openapi: string
  info: InfoObject
  paths?: PathObject
}

type InfoObject = {
  title: string
}

type PathObject = {
  [key: string]: PathItemObject
}

type PathItemObject = {
  summary?: string
  description?: string
  get?: OperationObject
  put?: OperationObject
  post?: OperationObject
  delete?: OperationObject
  options?: OperationObject
  head?: OperationObject
  patch?: OperationObject
  trace?: OperationObject
}

type OperationObject = {
  tags?: string[]
  summary?: string
  description?: string
  operationId?: string
}

export type Method = (typeof methods)[number]
