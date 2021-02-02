/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 思路: 异或运算
  return nums.reduce((prev, curr) => prev ^ curr);

  // 思路2: 使用filter, 就是index == lastIndex
  // let filterArr = nums.filter((item, index, arr) => arr.lastIndexOf(item) == arr.indexOf(item))
  // return filterArr
};
