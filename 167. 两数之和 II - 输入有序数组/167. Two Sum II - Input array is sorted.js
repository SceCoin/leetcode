/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers == null || numbers.length < 2) {
    return numbers[0];
  }

  // 双指针模式, 一个从左边往右边走, 一个从右边往左边走, 当发生两者相加大于目标值时跳出循环,右边继续向左移动
  var left = 0;
  var right = numbers.length - 1;
  for (right; right > left; right--) {
    while (left < right && numbers[left] + numbers[right] < target) {
      left++;
    }

    if (left != right && numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1];
    }
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 二分查找
var twoSum = function (numbers, target) {
  let len = numbers.length;
  let right = len - 1;

  for (let i = 0; i < len; i++) {
    let left = i + 1;

    while (left <= right) {
      let mid = left + ((right - left) >> 1);

      if (numbers[mid] == target - numbers[i]) {
        return [i + 1, mid + 1];
      }

      if (numbers[mid] > target - numbers[i]) {
        right = mid - 1;
      }

      if (numbers[mid] < target - numbers[i]) {
        left = mid + 1;
      }
    }
  }

  return [-1, -1];
};
