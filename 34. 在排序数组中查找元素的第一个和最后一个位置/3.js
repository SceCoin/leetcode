/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 思路: 升序数组, 二分查找最左值, 先找到这个target, 然后while遍历相等, 得到范围

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] >= target) {
      right = mid - 1;
    }
  }

  if (nums[left] !== target) {
    return [-1, -1];
  }

  let res = [left, left];
  while (nums[++left] == target) {
    res[1] = left;
  }

  return res;
};
