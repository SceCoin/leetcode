/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 思路: 1. 只要 indexOf 和 lastIndexOf 相等就可以了
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
  //     return i
  //   }
  // }

  // return -1

  // 思路: 2. 哈希map
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) {
      return i;
    }
  }

  return -1;
};
