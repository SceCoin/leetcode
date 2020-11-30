/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  if (nums[nums.length - 1] > nums[0]) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + ((right - left) >> 1);

    // 当前大于后一项, 说明就是在旋转点, 后一项就是最小值
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // 当前小于前一项, 说明也是在旋转点, 当前就是最小值
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    // 跟第一个值比较, 因为左边都会大于它, 右半边都小于它
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
