/**
 * @param {number} n
 * @return {number}
 */
// 贪心算法
// 规律是尽可能的找到足够多的3，
// 然后判断余数， 如果余数为0， 那么就是3的n次方， 如果余数为1， 那么就是把最后的3变成4，获得最大解，
// 如果是2那么就是再乘个2就可以了

var cuttingRope = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;

  const a = Math.floor(n / 3);
  const b = n % 3;

  if (b === 0) return Math.pow(3, a);
  if (b === 1) return Math.pow(3, a - 1) * 4;
  if (b === 2) return Math.pow(3, a) * 2;
};
