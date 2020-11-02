/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  let len = needle.length;
  let str;

  for (let i = 0; i < haystack.length - len + 1; i++) {
    str = haystack.substring(i, len + i);
    if (str === needle) {
      return i;
    }
  }

  return -1;
};
