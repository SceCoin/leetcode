/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // 单次遍历数组, 如果一个数在遍历过程中count值被减为0, 说明它在其中的次数不够, count为正的就是最多数
    let count = 0
    let majority = nums[0]

    for (let i = 0; i < nums.length; i++) {
      if (count == 0) {
        majority = nums[i]
      }

      if (majority === nums[i]) {
        count++
      } else {
        count--
      }
    }

    return majority
  };
