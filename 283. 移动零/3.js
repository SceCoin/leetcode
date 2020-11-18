/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 遇到0删除, 然后计数, 等之后在补上0

var moveZeroes = function (nums) {
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      i--;
      countZero++;
    }
  }

  while (countZero) {
    nums.push(0);
    countZero--;
  }
};
