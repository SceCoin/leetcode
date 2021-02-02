/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 思路: 1. indexOf和lastIndexOf
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     return true
  //   }
  // }

  // return false

  // 思路2: 排序数组后判断是否存在 i == i + 1 的元素
  // nums.sort((a, b) =>  a - b)
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] == nums[i + 1]) {
  //     return true
  //   }
  // }

  // return false

  // 思路3: 通过set判断size和原数组的length
  let mySet = new Set(nums);
  return mySet.size !== nums.length;

  // 思路4: 通过filter返回的数组 length 和元素组对比
  // let filterArr = nums.filter((item, index, arr) => arr.lastIndexOf(item) == index)
  // return filterArr.length != nums.length
};
