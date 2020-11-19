/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 1;
  let curr = 1;

  for (let i = 2; i < n + 1; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 1;
  let arr = [1];

  while (arr.length < n) {
    [a, b] = [b, a + b];
    arr.push(b);
  }

  return arr[arr.length - 1];
};
