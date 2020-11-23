/**
 * @param {number} x
 * @return {number}
 */
// 二分查找的方式
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let left = 0;
  let right = Math.floor(x / 2);
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      left = mid + 1;
    }

    if (mid * mid > x) {
      right = mid - 1;
    }
  }

  return right;
};
