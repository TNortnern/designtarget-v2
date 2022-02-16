export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const emptyObject = (obj: Record<string, any>) => !Object.keys(obj).length
