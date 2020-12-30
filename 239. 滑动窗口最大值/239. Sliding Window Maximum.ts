function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []
  const res: number[] = []

  for (let i:number = 0; i < nums.length; i++) {
    if (i - deque[0] >= k) {
      deque.shift()
    }

    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

    deque.push(i)

    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }

  return res
};
