/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  return s.split(/\s+/).reverse().join(" ");
};
