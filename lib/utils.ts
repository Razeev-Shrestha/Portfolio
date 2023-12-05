export const validate = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false
  }

  return true
}

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && 'message' in error) {
    return error.message as string
  } else if (error && typeof error === 'object' && 'message' in error) {
    return error.message as string
  } else if (error && typeof error === 'string') {
    return error
  }
  return 'Unknown error'
}
