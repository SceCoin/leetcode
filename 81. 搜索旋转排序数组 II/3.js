/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
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

    // 这一步是去重操作, 判断  mid == left 是否为true, true说明重复
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
