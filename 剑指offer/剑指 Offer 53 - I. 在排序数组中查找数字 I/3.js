/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.indexOf(target) == -1) {
    return 0;
  }
  return nums.lastIndexOf(target) - nums.indexOf(target) + 1;
};
