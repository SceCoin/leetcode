/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = String(x);
  let reverStr = str.split("").reverse().join("");

  if (str == reverStr) {
    return true;
  }

  return false;
};
