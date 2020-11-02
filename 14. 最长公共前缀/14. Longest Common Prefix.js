/**
 * @param {string[]} strs
 * @return {string}
 */

// 先取第一个值作为基准. 然后通过之后的值跟第一个值比较, 有公共部分就截取公共部分, 再跟之后的值进行比较
// 所以会用到双重循环

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let res = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < res.length && j < strs[i].length; j++) {
      if (res[j] !== strs[i][j]) {
        break;
      }
    }

    res = res.slice(0, j);
    if (res === "") {
      return res;
    }
  }

  return res;
};
