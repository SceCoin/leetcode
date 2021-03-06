/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let n = 0;
  const loop = (idx, sum) => {
    if (nums.length > idx) {
      loop(idx + 1, sum + nums[idx]);
      loop(idx + 1, sum - nums[idx]);
    } else {
      sum === S && n++;
    }
  };

  loop(0, 0);
  return n;
};
