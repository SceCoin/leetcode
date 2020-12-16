function wordPattern(pattern: string, s: string): boolean {
  const arrP: string[] = pattern.split('')
  const arrS: string[] = s.split(' ')
  const map = new Map()

  if (arrP.length != arrS.length) {
    return false
  }
  if (new Set(arrP).size != new Set(arrS).size) {
    return false
  }

  for (let i: number = 0; i < arrP.length; i++) {
    if (map.has(arrP[i])) {
      if (map.get(arrP[i]) != arrS[i]) {
        return false
      }
    } else {
      map.set(arrP[i], arrS[i])
    }
  }

  return true
};
