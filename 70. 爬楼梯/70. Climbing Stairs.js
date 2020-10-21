/**
 * @param {number} n
 * @return {number}
 */

// 爬楼梯问题就是斐波那契函数, 只要写斐波那契就可以解题了,只不过不是最优解.

var climbStairs = function (n) {
  if (n < 4) {
    return n;
  }

  let firstNum = 2;
  let secondNum = 3;
  let result = 0;

  for (let i = 4; i <= n; i++) {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }

  return result;
};

///--------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 2;
  let temp;

  if (n == 1) {
    return n;
  }

  if (n == 2) {
    return n;
  }

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};
