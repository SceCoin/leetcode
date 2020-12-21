function generate(numRows: number): number[][] {

  let res: number[][] = []
  let prev: number[] = []

  for (let i: number = 0; i < numRows; i++) {
    let curr: number[] = []

    curr[0] = 1
    curr[i] = 1
    for (let j: number = 1; j < i; j++) {
      curr[j] = prev[j] + prev[j - 1]
    }

    prev = curr
    res.push(curr)
  }

  return res
};
