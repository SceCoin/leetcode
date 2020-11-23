/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 这题的提议是 随机从 1 到 n选一个数字, 所以左右边界就有了, 1 和 n
// 只需要一直对半分, 然后按照给出的大了还是小了再缩小边界, 最后得出结果
// 完全就是 二分模板
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const res = guess(mid);

    if (res == 1) {
      left = mid + 1;
    }

    if (res == -1) {
      right = mid - 1;
    }

    if (res == 0) {
      return mid;
    }
  }
};
