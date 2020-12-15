function getRowts(rowIndex: number): number[] {
  let prev: number[] = []

  for (let i: number = 0; i <= rowIndex; i++) {
      let curr: number[] = []

      curr[0] = 1
      curr[i] = 1
      for (let j: number = 1; j < i; j++) {
          curr[j] = prev[j] + prev[j - 1]
      }

      prev = curr
  }

  return prev
};
