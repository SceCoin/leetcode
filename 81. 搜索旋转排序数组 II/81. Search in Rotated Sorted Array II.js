/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// 思路:   因为存在重复元素, 所以没法使用 mid 和 left直接比较,
// 而是 判断 mid === left ?  如果相等说明重复了, 需要 letf++之后跳出这次循环, 进行下一次
var search = function (nums, target) {
  if (!nums.length) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + ((right - left) >> 1);

    if (nums[mid] == target) {
      return true;
    }

    if (nums[mid] == nums[left]) {
      left++;
      continue;
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

  return false;
};
