/**
 * 实现思路跟自己的一致, 但是忘记了使用charCode()方法去取字母的数值.
 * 说明还是对内置API不熟悉.
 */

// 将字母数组映射到一个它的 索引数组, 然后用数值, 一个关键的值就是 AB = A * 26 ** 1 + B * 26 ** 0
const titleToNumber = function (s) {
  let len = s.length;
  let arr = [...s].reverse().map((letter) => letter.charCodeAt() - 64);
  let res = 0;

  for (let i = 0; i < len; i++) {
    res += arr[i] * Math.pow(26, i);
  }

  return res;
};
