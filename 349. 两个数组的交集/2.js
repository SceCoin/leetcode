/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 一个数组先排序, 然后另一个数组用来for循环里使用二分查找, 时间复杂度为O(nlogn)

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
    } else {
      right = mid - 1;
    }
  }

  return false;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = [];
  let map = {};

  for (let n1 of nums1) {
    map[n1] = true;
  }

  for (let n2 of nums2) {
    if (map[n2]) {
      map[n2] = false;
      res.push(n2);
    }
  }

  return res;
};
