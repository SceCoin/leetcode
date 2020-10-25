/**
 * @param {string} s
 * @return {string}
 */

// 中心扩展法..   如果一个回文串的左边和右边相等,那么它一定也是回文串.
// 所以就是从中间延伸去找最长的回文, 但回文也有奇偶, 所以要确定两次中心位置在哪.

var longestPalindrome = function (s) {
  let res = s[0] || "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= 2; j++) {
      let left = i;
      let right = i + j;

      // 核心就是这一块不断寻找回文
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }

      let length = right - left - 1; // (right - 1) - (left + 1) + 1

      if (length > res.length) {
        res = s.substr(left + 1, length);
      }
    }
  }

  return res;
};
