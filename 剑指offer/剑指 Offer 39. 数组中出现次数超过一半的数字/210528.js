/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // 因为一定会超过数组的一半, 所以数组的中位数一定是这个数字,
    let half = Math.floor(nums.length / 2)
    nums.sort((a, b) =>  a - b)

    return nums[half]
  };
