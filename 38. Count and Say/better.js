/**
 * @param {number} n
 * @return {string}
 */

// str会每次循环都获取到上一个str,
var countAndSay = function (n) {
  let str = "1";

  for (let i = 1; i < n; i++) {
    let aryStr = str.split("");
    str = "";
    let count = 1;

    for (let j = 0; j < aryStr.length; j++) {
      if (aryStr[j] !== aryStr[j + 1]) {
        str += count + aryStr[j];
        count = 1;
      } else {
        count++;
      }
    }
  }

  return str;
};
