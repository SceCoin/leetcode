/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = 1;
  digits = digits.reverse();

  for (let i = 0; i < digits.length; i++) {
    if (n > 0) {
      digits[i] += n;

      if (digits[i] >= 10) {
        if (i == digits.length - 1) {
          digits[i + 1] = 0;
        }

        n = 1;
        digits[i] -= 10;
      } else {
        n = 0;
      }
    }
  }

  return digits.reverse();
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;

    // 这一步是判断是否有中间进位, 如果不等于0, 说明没进位, 直接返回, 如果等于0, 说明进位了, 会跳过这步进行下一个循环里.
    if (digits[i] != 0) {
      return digits;
    }
  }

  // 这里是需要判断最后一个连续进位, 进位到999到1000这样的情况, 就是重新创建个数组, 然后置0, 首位改为1
  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};
