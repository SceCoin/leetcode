/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 循环周期是 n = 2 * numRows - 2
// 字符串的索引是 x = i % x
// 行号Y = min(x, n - x)

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const res = new Array(numRows).fill("");
  const n = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    const x = i % n;
    res[Math.min(x, n - x)] += s[i];
  }

  return res.join("");
};
