/**
 * @param {number[]} nums
 * @return {number}
 */
// 通过循环判断是否有超过2个以上重复, 有的话就用 splice删除
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

// 同向双指针,  当 i != i + 2时才移动 j, j 就是用来覆盖原来的元素的, 保证重复最多为2
var removeDuplicates = function (nums) {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
