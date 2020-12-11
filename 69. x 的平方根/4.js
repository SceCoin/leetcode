/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let left = 0;
  let right = Math.floor(x / 2);
  let mid;

  while (left <= right) {
    mid = left + ((right - left) >> 1);

    if (mid * mid == x) {
      return mid;
    }

    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
