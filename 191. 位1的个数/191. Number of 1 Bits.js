/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 位操作的方法,  n与n-1的与操作, 例如 1011和 1010与操作会导致从左开始有1的位数清零,
// 1011 & 1010 得出 1010,  1010 & 1001 得出 1000, 1000 & 0111 得出 0000
var hammingWeight = function (n) {
  let res = 0;

  while (n != 0) {
    res++;
    n &= n - 1;
  }

  return res;
};
