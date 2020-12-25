/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 思路: 1. 获得总的乘积, 然后依次除以各个元素, 获得结果. 但题目不允许除法, 复杂度O(n), 但是不行
  //       2. 遍历一次数组, 然后每次执行 Reduce得出结果, 保存到结果里, 复杂度 O(n2),
  //       3. 正向遍历依次数组,  保存一个前n项乘积, 再遍历依次数组, 反向保存后N向乘积, 二者相乘就是结果

  let res = [];

  for (let i = 0, temp = 1; i < nums.length; i++) {
    res[i] = temp;
    temp *= nums[i];
  }

  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }

  return res;
};
