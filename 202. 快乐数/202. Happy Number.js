/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 思路: 会无线循环说明一定会循环到某一个值导致 无限循环, 所以找到那个值就可以返回false

  if (n == 1) {
    return true;
  }

  const list = new Set();
  while (!list.has(n)) {
    list.add(n);
    let sum = 0;
    while (n) {
      const value = n % 10;
      sum += value * value;
      n = parseInt(n / 10);
    }
    if (sum == 1) {
      return true;
    }
    n = sum;
  }

  return false;
};
