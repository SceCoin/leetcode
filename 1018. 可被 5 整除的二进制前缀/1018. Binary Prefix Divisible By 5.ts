function prefixesDivBy5(A: number[]): boolean[] {
  let res: boolean[] = []
  let middle: number = 0
  for (let i: number = 0; i < A.length; i++) {
    middle = middle * 2 + A[i]
    res.push(middle % 5 == 0 ? true : false)
    middle = middle % 10
  }

  return res
};
