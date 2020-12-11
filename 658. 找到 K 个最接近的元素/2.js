/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left + k <= right) {
    if (x - arr[left] <= arr[right] - x) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[left + i]);
  }

  return res;
};
