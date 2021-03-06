/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
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
