function findTheDifference(s: string, t: string): string {
  const map = new Map()

  for (let i: number = 0; i < s.length; i++) {
    const val: number = map.get(s[i])
    map.set(s[i], val === undefined ? 1 : val + 1)
  }

  for (let i: number = 0; i < t.length; i++) {
    const val: number = map.get(t[i])
    if (val === 0 || val === undefined) {
      return t[i]
    } else {
      map.set(t[i], val -1)
    }
  }
};
