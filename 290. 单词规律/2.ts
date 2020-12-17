function wordPattern(pattern: string, s: string): boolean {
  const map = new Map()
  const arrp: string[] = pattern.split('')
  const arrs: string[] = s.split(' ')

  if (arrp.length != arrs.length) {
    return false
  }

  if (new Set(arrp).size !== new Set(arrs).size) {
    return false
  }

  for (let i: number = 0; i < arrs.length; i++) {
    if (map.has(arrs[i])) {
      if (map.get(arrs[i]) != arrp[i]) {
        return false
      }
    } else {
      map.set(arrs[i], arrp[i])
    }
  }

  return true
};
