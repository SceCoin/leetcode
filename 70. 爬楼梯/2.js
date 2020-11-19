/**
 * @param {number} n
 * @return {number}
 */

// 斐波拉 数组方式, 从11开头一直存下去

var climbStairs = function (n) {
  let a = 1;
  let b = 1;
  let arr = [1, 1];

  while (arr.length < n + 1) {
    [a, b] = [b, a + b];
    arr.push(b);
  }

  return arr[arr.length - 1];
};

/**
 * @param {number} n
 * @return {number}
 */
// 只存前两个加当前值.
var climbStairs = function (n) {
  let prev = 1;
  let cur = 1;

  for (let i = 2; i < n + 1; i++) {
    let temp = cur;
    cur = cur + prev;
    prev = temp;
  }

  return cur;
};
