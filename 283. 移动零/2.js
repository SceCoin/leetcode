/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 同向双指针, i遇上非0元素就跟j交换, 保证j之前的所有元素一定非零

var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] == 0 && nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    if (nums[j] != 0) {
      j++;
    }
  }
};
