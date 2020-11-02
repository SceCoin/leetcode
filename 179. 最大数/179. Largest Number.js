/**
 * @param {number[]} nums
 * @return {string}
 */

// 思路:  数组排序 只要比较两个元素拼接成字符串 ab和ba的大小, 然后按照降序排列.

var largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
    let S1 = `${a}${b}`;
    let S2 = `${b}${a}`;
    return S2 - S1;
  });

  return nums[0] != 0 ? nums.join("") : "0";
};
