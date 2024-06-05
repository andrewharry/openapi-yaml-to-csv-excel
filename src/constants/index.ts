export const methods = [
  'get',
  'put',
  'post',
  'delete',
  'options',
  'head',
  'patch',
  'trace',
] as const

export const headers = [
  'title',
  'tags',
  'catalogueId',
  'buildStatus',
  'summary',
  'path',  
  'method'
] as const

export const FileType = {
  csv: 'csv',
  xlsx: 'xlsx',
} as const
