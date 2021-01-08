/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 思路: 双端队列
  k = k % nums.length;
  // for (let i = 0; i < k; i++) {
  //   const num = nums.pop()
  //   nums.unshift(num)
  // }

  // 思路: 直接折叠
  let cut = nums.length - k;
  nums.unshift(...nums.splice(cut));
};
