function isIsomorphic(s: string, t: string): boolean {
  const arrs: string[] = s.split('')
  const arrt: string[] = t.split('')
  const map = new Map()

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
