/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 冒泡排序
var sortColors = function (nums) {
  // nums.sort((a,b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
};
