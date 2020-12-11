/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 思路:  先合并两个数组然后用sort进行排序,  然后找中位数就是如果数组长度为奇数, 那么中位数就是最中间的值
// 如果为偶数, 那么中位数就是 最中间的两个值相加除 2
// 但这个解法不符合题目的时间要求
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);

  let len = arr.length;
  let left = 0;
  let right = len - 1;

  if (len % 2 == 0) {
    let mid = left + ((right - left) >> 1);

    return (arr[mid] + arr[mid + 1]) / 2;
  } else {
    let mid = left + ((right - left) >> 1);
    return arr[mid];
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);

  let len = arr.length;

  if (len % 2 == 0) {
    return (arr[len / 2] + arr[len / 2 - 1]) / 2;
  } else {
    return arr[Math.floor(len / 2)];
  }
};
