function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const map: object = {}
  for (let c of s) {
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
    }
  }

  for (let char of t) {
    if (map[char]) {
      map[char]--
    } else {
      return false
    }
  }

  return true
};
