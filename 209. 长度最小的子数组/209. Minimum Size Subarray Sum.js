/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// 思路: 都是滑动窗口, i 固定, 让 指针 j 移动, 然后把符合范围的记录下来, 跟 res做对比
var minSubArrayLen = function (s, nums) {
  let i = 0;
  let sum = 0;
  let res = Infinity;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= s) {
      res = Math.min(res, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return res === Infinity ? 0 : res;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLen = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;

  while (j < nums.length) {
    sum += nums[j];
    while (sum >= s) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }

  return minLen === Infinity ? 0 : minLen;
};
