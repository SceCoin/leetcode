/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 思路: 直接使用转数组后在转会数字
  let arr = String(Math.abs(x)).split("");

  let num = arr.reverse().join("");

  if (x > 0) {
    return num > 2 ** 31 - 1 ? 0 : num;
  } else {
    return num > 2 ** 31 ? 0 : -num;
  }
};
