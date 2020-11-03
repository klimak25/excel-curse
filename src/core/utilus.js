export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  // eslint-disable-next-line no-undef
  return string.charAt(0).toUpperCase()+string.slice(1)
}
