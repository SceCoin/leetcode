/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 思路: 栈操作, 遇到左括号压入右括号, 然后遇到右括号就弹出栈, 如果栈空, 那就返回true, 否则false
  const stack = [];

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

    if (s[i] != stack.pop()) {
      return false;
    }
  }

  return stack.length == 0;
};
