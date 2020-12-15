function intersection(nums1: number[], nums2: number[]): number[] {
  const res:  number[] = []
  nums2.sort((a, b) => a - b)

  for (let i: number = 0; i < nums1.length; i++) {
      if (binarySearch(nums2, nums1[i])) {
          res.push(nums1[i])
      }
  }

  return [...new Set(res)]
}

const binarySearch = (nums: number[], target: number): boolean => {
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
      let mid: number = left + ((right - left) >> 1)

      if (nums[mid] == target) {
          return true
      }

      if (nums[mid] < target) {
          left = mid + 1
      }

      if (nums[mid] > target) {
          right = mid - 1
      }
  }

  return false
}
