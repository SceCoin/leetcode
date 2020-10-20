/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if ((num & (num - 1)) === 0) {
    while (num > 1) {
      num = num >> 2;
    }

    if (num == 1) {
      return true;
    }
  }

  return false;
};

console.log(isPowerOfFour(5));
console.log(isPowerOfFour(-4));
