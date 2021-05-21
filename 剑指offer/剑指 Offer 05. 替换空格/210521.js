/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    // 原生方法
    // return s.split(' ').join('%20')

    // 分解写法
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
