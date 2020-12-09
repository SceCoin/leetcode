/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (num, power) {
  if (power < 0) {
    num = 1 / num;
    power = -power;
  }

  let res = 1;
  let temp = num;

  while (power > 0) {
    if (power % 2 != 0) {
      res = res * temp;
    }

    temp *= temp;
    power = Math.trunc(power / 2);
  }

  return res;
};
