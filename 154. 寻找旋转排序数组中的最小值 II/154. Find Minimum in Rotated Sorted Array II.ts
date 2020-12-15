function findMin(nums: number[]): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] == nums[right]) {
      right--
    } else {
      right = mid
    }
  }

  return nums[left]
};
