function findMaxConsecutiveOnes(nums: number[]): number {
  let res: number = 0

  for (let i:number = 0; i < nums.length; i++) {
    let count: number = 0
    while (nums[i] == 1 && nums[i++] == 1) {
      count++
    }

    res = Math.max(res, count)
  }

  return res
};
