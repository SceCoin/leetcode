/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 解不出来

// 思路: 根据差值进行二分, 所以 left肯定是就0, 也就是没有差值, 而right肯定就是 数组里最大值-最小值的差值
//

var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);

  let len = nums.length;
  let left = 0;
  let right = nums[len - 1] - nums[0];

  while (left < right) {
    mid = left + ((right - left) >> 1);
    let cur = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
      while (nums[i] - nums[start] > mid) {
        start += 1;
      }
      cur += i - start;
    }
    if (cur < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
