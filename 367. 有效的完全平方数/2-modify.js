/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 正整数不包括0

  let left = 0;
  let right = num;

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
