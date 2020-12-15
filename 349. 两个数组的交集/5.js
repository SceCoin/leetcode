/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const res = [];
  const map = {};

  for (const n1 of nums1) {
    map[n1] = true;
  }

  for (const n2 of nums2) {
    if (map[n2]) {
      map[n2] = false;
      res.push(n2);
    }
  }

  return res;
};
