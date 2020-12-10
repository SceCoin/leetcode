/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 找左边界

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      right--;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
