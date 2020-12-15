/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 使用二分查找

  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;

    while (left <= right) {
      let mid = left + ((right - left) >> 1);

      if (numbers[mid] == target - numbers[i]) {
        return [i + 1, mid + 1];
      }

      if (numbers[mid] < target - numbers[i]) {
        left = mid + 1;
      }

      if (numbers[mid] > target - numbers[i]) {
        right = mid - 1;
      }
    }
  }

  return [-1, -1];
};
