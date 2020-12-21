/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // 思路: 在数组里找最小和第二小的值组成数组, 一直如此, 那么最后的最大和就会是每组最小值的总和
  //       所以只需要数组排序一下后把奇数位的数给相加就可以了

  nums.sort((a, b) => a - b);
  let res = 0;

  for (let i = 0; i < nums.length; i = i + 2) {
    res += nums[i];
  }

  return res;
};
