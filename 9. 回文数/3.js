/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let orginX = x;
  let newX = 0;

  while (x > 0) {
    let temp = x % 10;
    newX = newX * 10 + temp;
    x = (x - temp) / 10;
  }

  return newX == orginX;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let strX = String(x);
  let reverseX = strX.split("").reverse().join("");

  if (strX == reverseX) {
    return true;
  }

  return false;
};
