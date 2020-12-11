/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 1;
  let arr = [1, 1];

  while (n >= 2) {
    [a, b] = [b, a + b];
    arr.push(b);
    n--;
  }

  return arr.pop();
};
