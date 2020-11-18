/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路:  a + b + c = 0
// 可以先将数组排序, 然后插入3个指针,  最左固定, 让另两个指针去寻找符合条件的值
// 如果找到的话, 就加入结果数组里, 如果没找到, 那就判断 sum 是>0还是<0, 如果<0, 那就左边的指针移动
// 如果>0, 那就右边的指针移动.

var threeSum = function (nums) {
  let ans = [];
  let len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }

      if (sum < 0) {
        left++;
      }

      if (sum > 0) {
        right--;
      }
    }
  }
  return ans;
};
