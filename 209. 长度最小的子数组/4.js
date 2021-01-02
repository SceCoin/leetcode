/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // 思路: 双指针, 左指针不动, 右指针移动到满足 >= s, 后左指针在移动, 然后记录下最小值, 遍历完毕就结束

  let min = Infinity;
  let sum = 0;
  for (let i = 0, j = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      min = Math.min(min, i - j + 1);
      sum = sum - nums[j];
      j++;
    }
  }

  return min == Infinity ? 0 : min;
};
