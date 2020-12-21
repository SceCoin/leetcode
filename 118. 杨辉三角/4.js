/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 思路: 杨辉三角的重点就是 当前 i 位置的 值 等于上一行 i 位置和 i - 1位置的和,
  //       curr[i] = prev[i] + prev[i - 1]

  const res = [];
  let prev = [];

  for (let i = 0; i < numRows; i++) {
    const curr = [];

    curr[0] = 1;
    curr[i] = 1;
    for (let j = 1; j < i; j++) {
      curr[j] = prev[j] + prev[j - 1];
    }

    prev = curr;
    res.push(curr);
  }

  return res;
};
