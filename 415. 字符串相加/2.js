/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (nums1, nums2) {
  while (nums1.length > nums2.length) {
    nums2 = "0" + nums2;
  }

  while (nums1.length < nums2.length) {
    nums1 = "0" + nums1;
  }

  let carry = 0;
  let sum = 0;
  let res = "";

  for (let i = nums1.length - 1; i >= 0; i--) {
    sum = Number(nums1[i]) + Number(nums2[i]) + carry;
    res = (sum % 10) + res;
    carry = sum > 9 ? 1 : 0;
  }

  return carry == 1 ? "1" + res : res;
};
