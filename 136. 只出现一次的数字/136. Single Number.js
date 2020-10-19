/**
 * @param {number[]} nums
 * @return {number}
 */

// 异或运算, a^a = 0, a^0 = a , a^a^b = b

var singleNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) == nums.indexOf(nums[i])) {
      return nums[i];
    }
  }
};

var singleNumber3 = function (nums) {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
};

var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};
