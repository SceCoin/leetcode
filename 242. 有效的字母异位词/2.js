/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 思路: 使用哈希记录 s 里的 字符和个数, 然后在遍历 t, 如果不符合就返回 false
  if (s.length !== t.length) {
    return false;
  }

  let map = {};
  for (let c of s) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }

  for (let char of t) {
    if (map[char]) {
      map[char]--;
    } else {
      return false;
    }
  }

  return true;
};
