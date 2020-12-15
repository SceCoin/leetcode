/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 思路:  左树种类 * 右树种类
  let memo = new Array(n + 1);

  const recursion = (n) => {
    if (n == 0 || n == 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    let count = 0;
    for (let i = 0; i <= n - 1; i++) {
      count += recursion(i) * recursion(n - i - 1);
    }

    memo[n] = count;

    return count;
  };

  return recursion(n);
};
