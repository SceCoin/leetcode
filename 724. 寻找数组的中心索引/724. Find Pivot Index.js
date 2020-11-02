/**
 * @param {number[]} nums
 * @return {number}
 */

// 先求出数组的总和, 然后用总和-左边的和和当前的索引值, 如果二者相等说明左右相等. 返回当前索引
// 否则就左边和叠加

var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
};
