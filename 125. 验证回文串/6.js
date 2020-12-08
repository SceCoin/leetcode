/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  let reverseStr = str.split("").reverse().join("");
  if (str == reverseStr) {
    return true;
  }

  return false;
};
