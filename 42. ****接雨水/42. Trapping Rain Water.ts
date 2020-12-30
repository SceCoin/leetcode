function trap(height: number[]): number {
  if (height.length == 0) {
    return 0
  }

  const stack: number[] = []
  let res: number = 0

  for (let i: number = 0; i < height.length; i++) {
    while (stack.length != 0 && height[i] > height[stack[stack.length - 1]]) {
      let tmp: number = stack.pop()

      if (stack.length == 0) {
        break
      }

      res += (Math.min(height[i], height[stack[stack.length - 1]]) - height[tmp]) * (i - stack[stack.length - 1] - 1)
    }

    stack.push(i)
  }

  return res
};
