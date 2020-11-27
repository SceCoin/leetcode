/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let right = str.length - 1;
  let left = 0;

  while (left <= right) {
    if (str[left] != str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
