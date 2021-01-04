/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 思路: 计算阶乘后的数, 然后数0
  let total = 0;
  while (n >= 5) {
    total += (n / 5) | 0;
    n = n / 5;
  }
  return total;
};
