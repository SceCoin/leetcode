function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length == 0) {
    return 0
  }

  intervals.sort((a, b) => a[1] - b[1])

  let res: number = 0

  let prevRight: number = intervals[0][1]
  for (let i: number = 1; i < intervals.length; i++) {
    let nextLeft: number = intervals[i][0]
    if (prevRight > nextLeft) {
      res++
      continue
    }

    prevRight = intervals[i][1]
  }

  return res
};
