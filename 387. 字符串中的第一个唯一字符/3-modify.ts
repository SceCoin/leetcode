function firstUniqChar(s: string): number {
  let counts: number[] = new Array(26).fill(0)

  for (let c of s) {
    counts[c.charCodeAt(0) - 97]++
  }

  for (let i: number = 0; i < s.length; i++) {
    if (counts[s[i].charCodeAt(0) - 97] == 1) {
      return i
    }
  }

  return -1
};
