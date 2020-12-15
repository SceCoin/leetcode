/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 思路: 利用哈希表保存 K 个值, 然后如果重复元素在哈希表能找到, 说明在 K 个的范围里,
//       添加元素后, 哈希表大于K就删除到最前面那个
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};
