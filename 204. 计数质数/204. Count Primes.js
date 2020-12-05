/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  let sign = new Array(n).fill(1);

  for (let i = 2; i < n; i++) {
    if (sign[i] == 1) {
      count++;

      for (let j = i * i; j < n; j += i) {
        sign[j] = 0;
      }
    }
  }

  return count;
};
