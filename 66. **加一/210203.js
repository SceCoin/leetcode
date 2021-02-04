/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 思路: 主要考虑进位问题, 999进位成1000
  let len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    digits[i] += 1;
    digits[i] %= 10;

    if (digits[i] !== 0) {
      return digits;
    }
  }

  digits = Array(len + 1).fill(0);
  digits[0] = 1;
  return digits;
};
