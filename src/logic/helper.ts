export function formatMoney(str: string): string {
  if (!str) return ''
  let newStr = ''
  for (let i = 0; i < str.length - 2; i++) {
    const char = str[str.length - 3 - i]
    newStr = char + (i && i % 3 === 0 ? '.' : '') + newStr
  }
  return newStr + ',' + str.slice(-2) + ' €'
}