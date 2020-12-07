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
    // 因为x未必存在在数组里, 所以不需要找mid, 直接通过差值来判定 区间范围
    if (x - arr[left] <= arr[right] - x) {
      right--;
    } else {
      left++;
    }
  }

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[left + i]);
  }

  return res;
};
