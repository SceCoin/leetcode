/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 思路: 双指针, 先右指针移动保证子串内无重复, 发现重复时将左指针移动到无重复的位置,
  // 哈希保存无重复的值, key为字符, value为下标

  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }

  return max;
};
