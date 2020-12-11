/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
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

  if (nums[left] != target) {
    return [-1, -1];
  }

  let res = [left, left];
  while (nums[++left] == target) {
    res[1] = left;
  }

  return res;
};
