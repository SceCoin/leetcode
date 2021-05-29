/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 哈希
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return [map.get(nums[i]), nums[i]]
      } else {
        map.set(target - nums[i], nums[i])
      }
    }
  };
