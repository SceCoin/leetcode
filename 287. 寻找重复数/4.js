/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 思路: 值的二分查找

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
