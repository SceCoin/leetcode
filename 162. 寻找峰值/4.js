/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 思路: 二分查找, 所谓的峰值 其实就是找  mid > mid + 1 就可以了, 因为二分时就会使得 mid > mid - 1
  //       找最右边界

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
