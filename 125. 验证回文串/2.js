/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let res = false;
  let str = onlyNumberAndString(s);

  let reverseStr = str.split("").reverse().join("");

  if (reverseStr === str) {
    return !res;
  }

  return res;

  function onlyNumberAndString(s) {
    return s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  }
};
