/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = String(x);
  let reverseStr = str.split("").reverse().join("");

  if (str == reverseStr) {
    return true;
  }

  return false;
};
