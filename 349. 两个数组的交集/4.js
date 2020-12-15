/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 思路: 一个数组固定, 另一个数组用二分查找是否存在,

  const res = [];
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
