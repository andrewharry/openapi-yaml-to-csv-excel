export const isValidInputFile = (filePath: string): boolean => {
  return filePath.endsWith('.yaml') || filePath.endsWith('.yml')
}
export const isValidOutputFile = (filePath?: string): boolean => {
  if (!filePath) return true
  else return filePath.endsWith('.csv')
}