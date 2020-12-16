function isIsomorphic(s: string, t: string): boolean {
  const map = new Map()
  const arrs: string[] = s.split('')
  const arrt: string[] = t.split('')

  if (new Set(arrs).size != new Set(arrt).size) {
    return false
  }

  for (let i: number = 0; i < arrs.length; i++) {
    if (map.has(arrs[i])) {
      if (map.get(arrs[i]) != arrt[i]) {
        return false
      }
    } else {
      map.set(arrs[i], arrt[i])
    }
  }

  return true
};
