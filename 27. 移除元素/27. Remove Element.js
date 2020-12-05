/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 思路, 直接遍历然后找到元素删除, 时间复杂度O(n), 其实就是去重操作.
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 通过 IndexOf找到元素后删除, 时间复杂度O(n2)
var removeElement = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 不管原数组的长度, 而是覆盖数组里的值, 然后有产生覆盖就+1,
// 所以需要遍历数组, 把值跟val来比对, 比对不一样的就直接在元素组覆盖处理.

var removeElement = function (nums, val) {
  let res = 0;

  for (let num of nums) {
    if (num !== val) {
      nums[res] = num;
      res++;
    }
  }

  return res;
};
