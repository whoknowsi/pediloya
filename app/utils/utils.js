const accent_map = {'á':'a', 'é':'e', 'è':'e', 'í':'i','ó':'o','ú':'u','Á':'a', 'É':'e', 'è':'e', 'Í':'i','Ó':'o','Ú':'u', "'": ''}

export const sortArray = (array) => {
  return [...array].sort((a, b) => a.name.localeCompare(b.name))
}

export const removeTicksFrom = (string) => {
  if (!string) return ''
  let ret = ''
  for (var i = 0; i < string.length; i++) {
    ret += accent_map[string.charAt(i)] !== undefined ? accent_map[string.charAt(i)] : string.charAt(i)
  }
  return ret
}