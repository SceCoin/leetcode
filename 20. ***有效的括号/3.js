/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 思路: 栈解题, 碰到左边压入右边, 然后碰到右边弹出栈, 栈空返回true
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(")");
      continue;
    }
    if (s[i] == "[") {
      stack.push("]");
      continue;
    }
    if (s[i] == "{") {
      stack.push("}");
      continue;
    }

    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length == 0;
};
