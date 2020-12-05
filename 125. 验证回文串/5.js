/**
 * @param {string} s
 * @return {boolean}
 */

// 前后指针
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let j = str.length - 1;
  let i = 0;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */

// 字符串转数组
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reverseStr = str.split("").reverse().join("");

  if (str == reverseStr) {
    return true;
  }

  return false;
};
