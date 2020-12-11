/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 如果是 num >= 10, 那么有进位, 要继续下一位添加
  // 如果 num < 10, 那么直接增加后返回
  // 如果连续进位从 99 到 100, 那么直接重新回一个新的数组

  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;

    if (digits[i] != 0) {
      return digits;
    }
  }

  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};
