/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 利用左右指针夹逼, 然后通过 右指针减去左指针的方式
var search = function (nums, target) {
  if (!nums.length) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (nums[left] != target && left < nums.length) {
    left++;
  }

  while (nums[right] != target && right >= 0) {
    right--;
  }

  return left <= right ? right - left + 1 : 0;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 直接使用  for..of 计算出现的次数
var search = function (nums, target) {
  let count = 0;

  for (let num of nums) {
    if (num == target) {
      count++;
    }
  }

  return count;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// filter会返回一个筛选后的数组, 筛选的比较就是 item == target就可以了
var search = function (nums, target) {
  return nums.filter((item) => item == target).length;
};
