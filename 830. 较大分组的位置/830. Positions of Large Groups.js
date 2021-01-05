/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  // 思路: 进行一次遍历, 将重复字符大于等于3的保存到结果集里.

  const res = [];
  let start = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] != s[i - 1]) {
      if (i - start >= 3) {
        res.push([start, i - 1]);
      }
      start = i;
    }
  }

  return res;
};
