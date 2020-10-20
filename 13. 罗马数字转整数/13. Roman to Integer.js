/**
 * @param {string} s
 * @return {number}
 */

// 把罗马字母先放到字典里, 然后去跟字符串配对, 如果能在字符串里找到索引, 就把值取出来相加. 因为存在两个字母, 所以需要做两次判断,
// 并且要保证边界不超过, 所以要有  i + 1 < s.length

var romanToInt = function (s) {
  let map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; ) {
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      res += map[s.substring(i, i + 2)];
      i = i + 2;
    } else {
      res += map[s.substring(i, i + 1)];
      i = i + 1;
    }
  }

  return res;
};
