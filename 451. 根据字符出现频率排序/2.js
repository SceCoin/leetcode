/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 思路: 使用哈希, key 为字符, value为 重复的字符串

  const map = new Map();

  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + c);
    } else {
      map.set(c, c);
    }
  }

  return [...map.values()].sort((a, b) => b.length - a.length).join("");
};
