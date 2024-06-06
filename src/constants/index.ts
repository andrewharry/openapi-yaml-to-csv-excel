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
  'catalogueId',
  'title',
  'tags',
  'summary',
  'path', 
  'method',
  'version',
  'build',
  'obsolete'
] as const

export const FileType = {
  csv: 'csv',
  xlsx: 'xlsx',
} as const
