/**
 * @param {number[]} nums
 * @return {number}
 */

//  技巧：在索引[i]处，您只需要知道[i-1]和[i-2]处的最大利润。这是斐波那契的轻微变化。
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let maxCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxCurrent;
  }

  return maxAtOneBefore;
};

// 动态规划的方法:  dp作为一个列表, 计算的是按顺序存放抢每一间房可能获得的最大收益
// 最开始是0, 然后从第一间开始, 所以dp[1] = nums[0], 之后的问题就是 dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
var rob = function (nums) {
  let len = nums.length;
  if (len === 0) {
    return 0;
  }

  let dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[len];
};
