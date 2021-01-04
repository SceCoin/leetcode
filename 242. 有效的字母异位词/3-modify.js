/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 思路: 使用哈希表映射字符串, key 为 字母, value 为字母个数,
  if (s.length != t.length) {
    return false;
  }

  let map = new Map();

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let char of t) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
