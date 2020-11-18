/**
 * @param {number[]} nums
 * @return {number}
 */

// 因为在原数组里操作, 而且已经排序, 所以只需要判断如果下一个值也是相同, 那就把这值删除

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

// 这个是不删除数组的长度, 而是去修改之前的值, 然后返回修改值的长度
var removeDuplicates = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 因为已经排序, 所以每到不重复的位置就说明可以加1来计算个数, 然后修改前几个的值
    if (nums[i] != nums[i + 1]) {
      j++;
      nums[j] = nums[i + 1];
    }
  }

  // 少算了第一个, 所以需要加1. J本质上是数之间的间隙
  return j + 1;
};
