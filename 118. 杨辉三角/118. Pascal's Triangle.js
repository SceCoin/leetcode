/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];

  for (let i = 0; i < numRows; i++) {
    //循环开始先创建每个二维数组
    result[i] = [];

    // 头部添加1, 然后结束时尾部添加1, 中间的值为上一层的自身的索引和索引-1的值
    result[i][0] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][i] = 1;
  }

  return result;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let resRow = [];

    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        resRow.push(1);
      } else {
        let lastResRow = res[i - 1];
        resRow.push(lastResRow[j - 1] + lastResRow[j]);
      }
    }

    res.push(resRow);
  }

  return res;
};
