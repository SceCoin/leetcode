/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 思路: 把所有计算过的值保存到 set 中, 如果又出现了表中的数说明进入重复了

  const mySet = new Set();

  while (!mySet.has(n)) {
    mySet.add(n);
    let sum = 0;

    while (n) {
      const value = n % 10;
      sum += value ** 2;
      n = parseInt(n / 10);
    }

    if (sum == 1) {
      return true;
    }

    n = sum;
  }

  return false;
};
