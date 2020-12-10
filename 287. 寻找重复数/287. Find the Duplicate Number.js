/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路: 二分法, 用值来二分, 而不是范围二分.  因为已经确定范围是在 1 ~ n 之间, 所以二分的就是这范围
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1); // 找到中间值

    let count = 0;
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    if (count > mid) {
      // 如果计数count > mid, 说明重复数就在 左边, 在值的[1, mid]区间里
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
