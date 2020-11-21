/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (nums[left] != target && left < nums.length) {
    left++;
  }

  while (nums[right] != target && right >= 0) {
    right--;
  }

  return left <= right ? right - left + 1 : 0;
};
