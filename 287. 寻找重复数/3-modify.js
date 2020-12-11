/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 思路: 不是数组的二分, 而是对于值的二分查找,
  //       数组是用来计数的, 因为值是从1 ~ n 之间在 n + 1 的数组里
  //       那么二分之后有 重复数 的数组必然比另一半大

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    let count = 0;
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    if (mid < count) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
