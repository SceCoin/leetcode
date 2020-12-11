/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let subRes = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        subRes[j] = 1;
      } else {
        subRes[j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }

    res.push(subRes);
  }

  return res;
};
