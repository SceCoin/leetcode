/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 使用 splice
  let part = nums.splice(nums.length - k);
  for (let i = part.length - 1; i >= 0; i--) {
    nums.unshift(part[i]);
  }
};

// 尾部Pop, 头部unshift
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    const num = nums.pop();
    nums.unshift(num);
  }
};

// 全部都是splice
var rotate = function (nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k));
};
