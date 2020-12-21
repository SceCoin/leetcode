/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let str = nums.join("");
  let arr = str.split(0);

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }

  return max;

  // return Math.max(...nums.join('').split('0').map(str => str.length))
};
