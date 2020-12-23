/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 思路:  1. indexOf + lastIndexOf
  //        2. 双指针, i固定 j 移动
  //        3. 哈希set

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};
