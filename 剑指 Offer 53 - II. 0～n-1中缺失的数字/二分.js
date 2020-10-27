/**
 * @param {number[]} nums
 * @return {number}
 */
// 判断下标和值是否相等。 如果不等就从二分后继续开始。

var missingNumber = function (nums) {
  if (nums.length - 1 === nums[nums.length - 1]) {
    return nums.length;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + parseInt((right - left) / 2);

    mid === nums[mid] ? (left = mid + 1) : (right = mid - 1);
  }

  return left;
};
