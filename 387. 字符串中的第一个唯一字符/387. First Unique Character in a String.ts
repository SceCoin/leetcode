function firstUniqChar(s: string): number {
  const map: object = {}

  for (let i: number = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1
    } else {
      map[s[i]] = 1
    }
  }

  for (let j: number = 0; j < s.length; j++) {
    if (map[s[j]] == 1) {
      return j
    }
  }

  return -1
};
