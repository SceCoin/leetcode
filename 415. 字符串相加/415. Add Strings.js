/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 思路:  先把两个字符串的长度补齐, 然后从尾部相加, 保存进位数,  结果为 相加值除10取余数然后加进位
// 就是正常的字符串转数字, 里面用到了+号进行强制转换

var addStrings = function (num1, num2) {
  while (num1.length > num2.length) num2 = "0" + num2;
  while (num2.length > num1.length) num1 = "0" + num1;

  let res = "";
  let carry = 0;
  let sum = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    sum = +num1[i] + +num2[i] + carry;
    res = (sum % 10) + res;
    carry = sum > 9 ? 1 : 0;
  }

  return carry == 1 ? "1" + res : res;
};
