/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    // 1. 方法一:内置函数
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
    //     return nums[i]
    //   }
    // }

    // 2. 方法2: 先排序数组, 然后碰到i == i + 1的时候就返回
    // nums.sort()

    // for (let i = 0; i < nums.length; i++) {
    //   let j = i + 1
    //   if (nums[i] == nums[j]) {
    //     return nums[i]
    //   }
    // }

    // 3. 方法3: 用哈希去重
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) {
        return nums[i]
      } else {
        map.set(nums[i], true)
      }
    }
  };
