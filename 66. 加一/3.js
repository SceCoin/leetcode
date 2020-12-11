/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 倒序遍历, 如果 num + 1 = 10, 那么设为0 然后让下一位 + 1
  // 否则直接返回

  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    digits[i] += 1;

    digits[i] %= 10;

    if (digits[i] != 0) {
      return digits;
    }
  }

  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};
