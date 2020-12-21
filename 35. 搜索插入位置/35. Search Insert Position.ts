function searchInsert(nums: number[], target: number): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    let mid = left + ((right - left) >> 1)

    if (nums[mid] == target) {
      return mid
    }

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
};
