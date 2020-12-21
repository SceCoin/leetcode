/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 思路: 有序数组 ---> 想到二分查找
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
