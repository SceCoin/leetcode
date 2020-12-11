/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先需要对数组排序
  // 然后使用三个指针 最左定位i, 然后在有 left = i + 1 和 right = len - 1指针
  // 用来判断 i + left + right 是否为0
  // 区分 sum = 0 , sum > 0 , sum < 0三种情况.

  let res = [];
  let len = nums.length;
  if (nums == null || len < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }

      if (sum > 0) {
        right--;
      }

      if (sum < 0) {
        left++;
      }
    }
  }

  return res;
};
