/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // 思路: 滑动窗口, 让一个指针固定, 另一个指针移动, 符合结果就保存结果里, 然后让固定指针下移一位
  let j = 0;
  let sum = 0;
  let res = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      res = Math.min(res, i - j + 1);
      sum -= nums[j];
      j++;
    }
  }

  return res == Infinity ? 0 : res;
};
