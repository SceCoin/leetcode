/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = nums.sort((a, b) => b - a).slice(0, k);
  return arr[k - 1];
};
