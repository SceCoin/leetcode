/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 思路: 二分查找, 并且不断往右边界走,
  //       不用考虑左边是因为 一个值只要大于右边, 那它就一定是峰值,

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] >= nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
