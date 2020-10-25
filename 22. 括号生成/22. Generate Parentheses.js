/**
 * @param {number} n
 * @return {string[]}
 */

// 回溯算法, 从手里有N个括号开始, 左括号N个, 右括号N个.
// 然后先选择左括号, 只要能选左括号的情况就选左括号, 选不了时就选择右括号.

var generateParenthesis = function (n) {
  let res = [];

  function generate(str, left, right) {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    if (left > 0) {
      generate(str + "(", left - 1, right);
    }

    if (left < right) {
      generate(str + ")", left, right - 1);
    }
  }

  generate("", n, n);
  return res;
};
