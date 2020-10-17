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
