/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    // 内置函数
    // return s.split(' ').join('%20')

    // 循环
    let res = ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        res += '%20'
      } else {
        res += s[i]
      }
    }

    return res
  };
