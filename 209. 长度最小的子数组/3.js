/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // 思路: 双指针, 固定一个指针, 然后让另一个指针移动到符合要求, 保存长度, 跟min对比, 再移动固定的指针到下一位继续

  let res = Infinity;
  let sum = 0;
  let j = 0;

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
