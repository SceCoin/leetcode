/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  // 解决+1后判断是否进位, 如果进位就置0然后继续循环, 没置0的话就可以直接返回.
  for (let i = len - 1; i >= 0; i--) {
    digits[i] += 1;
    digits[i] %= 10;

    if (digits[i] != 0) {
      return digits;
    }
  }

  // 解决全进位的问题, 类似[9,9]变成[1,0,0]这样.
  digits = Array(len + 1).fill(0);
  digits[0] = 1;
  return digits;
};
