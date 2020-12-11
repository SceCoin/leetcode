/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }

  let left = 0;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (mid * mid == num) {
      return true;
    }

    if (mid * mid < num) {
      left = mid + 1;
    }

    if (mid * mid > num) {
      right = mid - 1;
    }
  }

  return false;
};
