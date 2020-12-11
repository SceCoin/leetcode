/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路: 找临界点, 因为旋转, 所以临界点的右边一定是最小值
// 依旧是二分法,  临界条件就是 mid > mid + 1, 那么 mid + 1就是最小值
// 或者 mid < mid - 1, 那么mid就是最小值

var findMin = function (nums) {
  if (!nums.length) {
    return null;
  }

  if (nums.length == 1) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  if (nums[right] > nums[left]) {
    return nums[0];
  }

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
  }
};
