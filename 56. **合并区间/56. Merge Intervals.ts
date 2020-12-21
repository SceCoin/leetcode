function merge(intervals: number[][]): number[][] {
  const res: number[][] = []

  intervals.sort((a, b) => a[0] - b[0])

  let prev: number[] = intervals[0]

  for (let i: number = 0; i < intervals.length; i++) {
    let curr = intervals[i]

    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(prev)
      prev = curr
    }
  }

  res.push(prev)
  return res
};
