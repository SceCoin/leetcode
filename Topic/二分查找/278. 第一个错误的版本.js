/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 这个是 二分查找的另一种模板, 不是求目标值 , 而是区分左右, 所以边界是 left < right, 而不是 <=
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    let mid;

    while (left < right) {
      mid = left + ((right - left) >> 1);

      let res = isBadVersion(mid);

      if (res == true) {
        right = mid;
      }

      if (res == false) {
        left = mid + 1;
      }
    }

    return right;
  };
};
