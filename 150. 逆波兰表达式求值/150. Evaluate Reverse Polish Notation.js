/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const SIGN = {
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b) | 0,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  const stack = [];
  tokens.forEach((item) => {
    if (item in SIGN) {
      const b = stack.pop();
      const a = stack.pop();
      const res = SIGN[item](a, b);
      stack.push(res);
    } else {
      stack.push(+item);
    }
  });

  return stack.pop();
};
