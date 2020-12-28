/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = [...nums];
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let total = 0;
  for (let n = i; n <= j; n++) {
    total += this.nums[n];
  }

  return total;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
