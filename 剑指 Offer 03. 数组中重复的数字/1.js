/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // for (let i = 0; i < nums.length; i++) {
  //     if(i !== nums.lastIndexOf(nums[i])) {
  //         return nums[i]
  //     }
  // }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
  }
};
