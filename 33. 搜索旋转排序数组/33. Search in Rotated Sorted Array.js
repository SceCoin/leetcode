/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 思路:
// 二分查找, 因为是有序的, 只不过有旋转, 重要的就是找到临界点,
// 因为有目标值, 所以二分后如果 Mid == target, 那就是找到
// 否则用来判断  mid 和 最左值, 如果 mid >= left, 说明在做半边升序处, 如果 target >= left并且 target < mid, 那么targe就在这范围里
// 反之就在另外一边.

var search = function (nums, target) {
  if (!nums.length) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
