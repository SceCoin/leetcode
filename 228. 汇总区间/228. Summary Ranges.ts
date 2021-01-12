function summaryRanges(nums: number[]): string[] {
  let res: string[] = []
  let i: number = 0
  let start: number = 0
  while (i++ < nums.length) {
    if (nums[i] - nums[i - 1] !== 1) {
      res.push(nums[start] + (i - start === 1 ? "" : '->' + nums[i - 1]))
      start = i
    }
  }
  return res
};
