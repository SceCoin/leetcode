function firstUniqChar(s: string): number {
  let hash: object = {}
  let res = new Map()

  for (let i: number = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      res.delete(s[i])
    } else {
      hash[s[i]] = 1
      res.set(s[i], i)
    }
  }

  if (res.size == 0) {
    return - 1
  }

  return res.values().next().value
};
