function findPeakElement(nums: number[]): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)

    if (nums[mid] >=  nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return right
};
