/**
 * @param {number} x
 * @return {number}
 */

// 取绝对值后把数字转数组后翻转得到翻转数, 拼接后判断是否大于2的31次方, 有就返回0, 没有就返回值
// 负数的操作也是一样

var reverse = function (x) {
  let arr = String(Math.abs(x)).split("");

  let num = arr.reverse().join("");

  if (x > 0) {
    return num > 2 ** 31 - 1 ? 0 : num;
  } else {
    return num > 2 ** 31 ? 0 : -num;
  }
};
