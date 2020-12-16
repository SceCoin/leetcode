function minSubArrayLen(s: number, nums: number[]): number {
  let i: number = 0
  let sum: number = 0
  let res: number = Infinity

  for (let j = 0; j < nums.length; j++) {
    sum  += nums[j]

    while (sum >= s) {
      res = Math.min(res, j - i + 1)
      sum -= nums[i]
      i++
    }
  }

  return res == Infinity ? 0 : res
};
