/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序方法, 因为元素大于一半, 所以排序完中间的值一定是要找的元素
var majorityElement2 = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// 投票算法, 只要两个值不相等, 就把它们都给抵消了, 直到最后剩下的值就是需要直到的元素, i要从1开始
const majorityElement = function (nums) {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }

    if (majority === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
};
