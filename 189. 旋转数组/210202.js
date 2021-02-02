/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 思路: 1. 将数组看着是双端队列, 所以移动就是从后面取出然后往前面插入
  // k = k % nums.length

  // while (k > 0) {
  //   let last = nums.pop()
  //   nums.unshift(last)
  //   k--
  // }

  // return nums

  // 思路: 2. 直接找到截取位置, 然后使用splice
  k = k % nums.length;
  let cutPoint = nums.length - k;
  nums.splice(0, 0, ...nums.splice(cutPoint, k));
};
