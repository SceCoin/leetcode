/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1: number = m - 1
  let index2: number = n - 1
  let tail: number = m + n - 1

  while(index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[tail] = nums1[index1]
      index1--
      tail--
    } else {
      nums1[tail] = nums2[index2]
      index2--
      tail--
    }
  }
};
