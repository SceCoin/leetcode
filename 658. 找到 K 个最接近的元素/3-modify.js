/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // 思路: 二分查找, left + k < right

  let left = 0;
  let right = arr.length - 1;

  while (left + k <= right) {
    if (x - arr[left] <= arr[right] - x) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, left + k);
};
