function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
  const map = new Map()
  let res: number = 0

  for (let a of A) {
    for (let b of B) {
      map.set(0 - a - b, (map.get(0 - a - b) || 0) + 1)
    }
  }

  for (let c of C) {
    for (let d of D) {
      map.has(c + d) && (res += map.get(c + d))
    }
  }

  return res
};
