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
  if (nums == null || len < 3) return ans; // 如果数组不存在或者长度小于3, 说明元素不够
  nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果最左值大于0 , 那么sum 不可能等于0
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重操作

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      // while循环里其实就三步,  sum = 0, sum > 0, sum < 0
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) {
          // 去重操作
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          // 去重操作
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
