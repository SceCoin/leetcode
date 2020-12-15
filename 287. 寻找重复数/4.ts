function findDuplicate(nums: number[]): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)

    let count: number = 0
    for (const num of nums) {
      if (num <= mid) {
        count++
      }
    }

    if (mid < count) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};
