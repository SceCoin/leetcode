/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 贪心算法
// 尽可能的跳最远距离， 如果跳的最远距离比当前i移动的还小，说明就跳不到终点了
// 如果能跳的最大距离超过nums.length的长度， 那么说明就能到的了

var canJump = function (nums) {
  let res = false;

  let length = nums.length;
  let maxStep = 0;

  for (let i = 0; i < length; i++) {
    if (maxStep < i) return res;

    maxStep = Math.max(maxStep, i + nums[i]);

    if (maxStep >= length - 1) return !res;
  }
};
