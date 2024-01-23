export const isValidInputFile = (filePath: string): boolean => {
  const regex = /\.(yml|yaml|json)$/
  return regex.test(filePath)
}

export const isValidUpdateFile = (filePath: string): boolean => {
  const regex = /\.(csv|xlsx)$/
  return regex.test(filePath)
}

export const isValidOutputFile = (filePath?: string): boolean => {
  if (!filePath) return true

  const regex = /\.(csv|xlsx)$/
  return regex.test(filePath)
}
