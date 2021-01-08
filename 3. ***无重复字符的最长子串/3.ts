function lengthOfLongestSubstring(s: string): number {
  let map = new Map()
  let max: number = 0

  for (let i: number = 0, j: number = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }

    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }

  return max
};
