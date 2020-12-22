function dailyTemperatures(T: number[]): number[] {
  const res: number[] = new Array(T.length).fill(0)
  const stack: number[] = []

  for (let i: number = T.length - 1; i >= 0; i--) {
    while (stack.length  > 0 && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }

    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i
    }

    stack.push(i)
  }

  return res
};
