/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 思路:  1. 双指针: i永远为不重复的指针, j向后移动, 如果i和j元素相同,i不动. 如果i和j不同, i移动一位并且赋值为j的元素
  let i = 0;
  let j = 0;
  for (; j < nums.length; j++) {
    if (nums[j] !== nums[j + 1]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  return i;
};
