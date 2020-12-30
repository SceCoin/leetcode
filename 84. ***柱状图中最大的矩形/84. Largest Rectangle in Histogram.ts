function largestRectangleArea(heights: number[]): number {
  let maxArea: number = 0
  const stack: number[] = []
  heights = [0, ...heights, 0]

  for (let i: number = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop()
      maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }

  return maxArea
};
