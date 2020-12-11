/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路:  值的二分, 是先找到中间数, 然后让数组去计数, 分为左右两边, 如果那边数值大于Mid, 说明了重复值在哪一边
// 然后把范围缩小
// 给的数组只是一个计数作用, 所以不用考虑它是否有序

var findDuplicate = function (nums) {
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

    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
