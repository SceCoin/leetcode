/**
 * @param {string} s
 * @return {boolean}
 */

// 思路: 1. 先取出字母和数组的字符串 2. 新建翻转字符串, 跟原字符串对比
var isPalindrome2 = function (s) {
  let str = onlyStringAndNumber(s);

  let reverseStr = str.split("").reverse().join("");

  return reverseStr === str;

  function onlyStringAndNumber(s) {
    return s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  }
};

// 思路: 1. 先取出字母和数字的字符串  2. 用头尾双指针对比, 如果不一样就返回false, 遍历完返回true
const isPalindrome = function (s) {
  let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
