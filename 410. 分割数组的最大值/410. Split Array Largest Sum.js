/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let max = 0;
  let sum = 0;

  // 求出数组的和 以及 最大值, 可以理解为 二分的左右边界, 因为结果一定在 max 到 sum之间
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
    sum += nums[i];
  }

  // 使用二分查找找到 max 和 sum 里的最小值
  while (max < sum) {
    let mid = max + ((sum - max) >> 1);

    if (check(nums, mid, m)) {
      sum = mid;
    } else {
      max = mid + 1;
    }
  }

  // 主要没理解这个check, 其他都能理解
  function check(nums, val, m) {
    let sum = 0;
    let index = 1;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > val) {
        index++;
        sum = nums[i];
      } else {
        sum += nums[i];
      }
    }
    return index <= m;
  }
  return max;
};
