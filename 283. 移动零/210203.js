/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 思路: 遍历然后判断是否为0, 是就splice然后塞入后面

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     nums.push(nums.splice(i, 1))
  //     i--
  //   }
  // }

  // 思路: 2. 同向双指针, i和j移动, 当j碰到不为0时跟i交换, 然后i+1, j继续移动
  let i = 0;
  let j = 0;
  for (; j < nums.length; j++) {
    if (nums[j] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
};
