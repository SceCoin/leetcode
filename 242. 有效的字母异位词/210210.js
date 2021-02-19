/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 思路: 1. 字符串转数组后排序, 之后在转字符串后判定是否相等.
  // let strS = s.split('').sort().join('')
  // let strT = t.split('').sort().join('')

  // return strS == strT ? true : false

  // 思路: 2. 哈希表
  if (s.length != t.length) {
    return false;
  }

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map[t[j]] > 0) {
      map[t[j]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};
