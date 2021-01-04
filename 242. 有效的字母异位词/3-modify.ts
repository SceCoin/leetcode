function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false
  }

  const map = new Map()

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let char of t) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1)
    } else {
      return false
    }
  }

  return true
};
