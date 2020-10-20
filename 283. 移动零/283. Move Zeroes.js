/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 双指针的方法, i和j同时从0开始移动. i用来扫描全局, j用来对调元素, i碰上非零的元素就跟j对调, 就能把0都慢慢排到后面去
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
