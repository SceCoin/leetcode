/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 思路: 栈操作, 将字符压入栈中, 之后跟字符进行匹配, 如果匹配就弹出, 然后栈空返回true, 栈不空返回false

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

    if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length == 0;
};
