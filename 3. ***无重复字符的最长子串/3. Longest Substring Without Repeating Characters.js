/**
 * @param {string} s
 * @return {number}
 */

// 数组移动方式.  把数组里没有的字符添加到数组里, 如果碰到见过的字符, 就把见过的这个字符之前的元素都清空.
// 然后把数组最大长度保存在res里app
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }

    arr.push(s[i]);
    res = Math.max(res, arr.length);
  }

  return res;
};
