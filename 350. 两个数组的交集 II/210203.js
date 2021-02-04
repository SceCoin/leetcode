/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 思路: 1. 双指针可以, 但如果操作会导致一个数组被修改, 不是纯函数
  //      2. 同时pop两个数组, 然后把第一个数组里的值保存看第二个数组是否存在pop的元素, 存在就保存到结果集
  //      3. 哈希表

  let res = [];

  while (nums1.length != 0) {
    let curr = nums1.pop();
    if (nums2.indexOf(curr) != -1) {
      let value = nums2.splice(nums2.indexOf(curr), 1);
      res.push(value);
    }
  }

  return res;
};
