function productExceptSelf(nums: number[]): number[] {
  const res: number[] = []

  for (let i: number = 0, temp: number = 1; i < nums.length; i++) {
    res[i] = temp
    temp *= nums[i]
  }

  for (let i: number = nums.length - 1, temp: number = 1; i >= 0; i--) {
    res[i] *= temp
    temp *= nums[i]
  }

  return res
};
