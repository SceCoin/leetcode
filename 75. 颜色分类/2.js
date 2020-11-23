/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 三指针, left 表示 0, right 表示指向2, i表示指向1

  const swap = function (i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    let num = nums[i];

    if (num == 0) {
      swap(i, left);
      left++;
      i++;
    } else if (num == 2) {
      swap(i, right);
      right--;
    } else {
      i++;
    }
  }
};
