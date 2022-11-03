export function sessionGet(key: string) {
  const stringValue = window.sessionStorage.getItem(key)
  if (stringValue !== null) {
    const value = JSON.parse(stringValue)
    const expirationDate = new Date(value.expirationDate)
    if (expirationDate > new Date()) {
      return value.value
    } else {
      sessionStorage.removeItem(key)
    }
  }
  return null
}

export function sessionSet(key: string, value: any) {
  // expired in one week
  const expirationDate = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
  )
  const newValue = {
    value: value,
    expirationDate: expirationDate.toISOString(),
  }
  sessionStorage.setItem(key, JSON.stringify(newValue))
}
