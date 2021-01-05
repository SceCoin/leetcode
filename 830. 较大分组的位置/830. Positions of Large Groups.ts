function largeGroupPositions(s: string): number[][] {
  const res: number[][] = []
  let start: number = 0

  for (let i: number = 0; i <= s.length; i++) {
    if (s[i] != s[i - 1]) {
      if (i - start >= 3) {
        res.push([start, i - 1])
      }
      start = i
    }
  }

  return res
};
