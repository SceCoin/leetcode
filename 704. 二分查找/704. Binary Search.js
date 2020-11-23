/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路:  用左右双指针, 因为是二分, 所以 左右相加除2就是中间数,
// 然后用中间数跟目标值对比, 看要收束左右边界的哪一边, 收拢到最后如果左右指针相遇都没找到, 说明没有
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
