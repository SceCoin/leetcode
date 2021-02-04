/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 思路: 哈希表, 将每个元素保存到哈希表中, key为target - 元素值, value为索引, 这样当哈希表中存在元素, 就可以返回索引
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(target - nums[i], i);
    } else {
      return [map.get(nums[i]), i];
    }
  }
};
