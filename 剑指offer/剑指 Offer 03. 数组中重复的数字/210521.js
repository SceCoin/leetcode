/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    // 双指针, N2

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          return nums[i]
        }
      }
    }

    // map哈希
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) {
        return nums[i]
      } else {
        map.set(nums[i], true)
      }
    }
  };
