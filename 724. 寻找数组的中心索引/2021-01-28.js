/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 思路1: 双指针, 一个头一个尾, 两边和想相加, 那边小就移动那边指针, 然后当前指针+1和后指针-1相等时, 并且sum相等, 那么就找到
  // 思路1没写出来
  // 思路2: 先求出数组总和, 然后用总和减去左边的和 和 当前的索引值, 如果二者相等说明左右相等, 返回当前索引, 否则左边和叠加

  let sum = nums.reduce((a, b) => (a = a + b), 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};
