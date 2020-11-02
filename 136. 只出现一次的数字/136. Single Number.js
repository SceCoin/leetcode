/**
 * @param {number[]} nums
 * @return {number}
 */

// 第一思路解: 只要用数组里的 indexOf 和 lastIndexOf查找时如果相等, 所以就是唯一. 其他的值重复肯定不唯一.
var singleNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) == nums.indexOf(nums[i])) {
      return nums[i];
    }
  }
};

// 异或运算, a^a = 0, a^0 = a , a^a^b = b , 相同值会自我消除, 跟消消乐一样, 不同值保留, 因为只有唯一一个,所以不影响
var singleNumber3 = function (nums) {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
};

// JS的异或运算简便写法,
var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};
