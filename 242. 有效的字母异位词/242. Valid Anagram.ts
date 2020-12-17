function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const map = new Map()
  for (let c of s) {
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
    }
  }

  for (let c of t) {
    if (map[c]) {
      map[c]--
    } else {
      return false
    }
  }

  return true
};
