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
  let tmp = num;

  while (power != 0) {
    if (power % 2 == 1) {
      res = res * tmp;
    }

    tmp = tmp * tmp;
    power = Math.trunc(power / 2);
  }

  return res;
};
