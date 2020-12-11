/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let subRes = [];

    for (let j = 0; j < i + 1; j++) {
      if (j == i || j == 0) {
        subRes.push(1);
      } else {
        let lastResRow = res[i - 1];
        subRes.push(lastResRow[j - 1] + lastResRow[j]);
      }
    }

    res.push(subRes);
  }

  return res;
};
