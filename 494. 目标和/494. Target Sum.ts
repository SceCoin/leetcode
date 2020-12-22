function findTargetSumWays(nums: number[], S: number): number {
  let n: number = 0

  const loop = (idx: number, sum: number): void => {
    if (nums.length > idx) {
      loop(idx + 1, sum + nums[idx])
      loop(idx + 1, sum - nums[idx])
    } else {
      sum === S && n++
    }
  }

  loop(0, 0)
  return n
};
