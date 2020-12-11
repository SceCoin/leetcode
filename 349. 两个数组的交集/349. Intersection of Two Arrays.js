/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 使用两个循环, 但是额外加了map, 所以时间是 O(n)
const intersection = function (nums1, nums2) {
  let res = [];
  let map = {};

  for (let num of nums1) {
    map[num] = true;
  }

  for (let num of nums2) {
    if (map[num]) {
      map[num] = false;
      res.push(num);
    }
  }

  return res;
};

// 直接循环一个数组然后用 IndexOf, 时间是 O(n2)
var intersection2 = function (nums1, nums2) {
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) != -1) {
      res.push(nums1[i]);
    }
  }

  return [...new Set(res)];
};

// --------------------------------------------

// 二分查找的方式
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = [];
  nums2.sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i])) {
      res.push(nums1[i]);
    }
  }

  return [...new Set(res)];
};

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] == target) {
      return true;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return false;
};
