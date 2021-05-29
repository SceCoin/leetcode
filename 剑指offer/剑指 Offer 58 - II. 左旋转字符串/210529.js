/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    // 方法1: 内置函数, 变成数组后遍历位移
    // let arr = s.split('')
    // for (let i = 0; i < n; i++) {
    //   arr.push(arr[0])
    //   arr.shift(arr[0])
    // }
    // return arr.join('')

    // 方法2: 内置函数
    // let arr = s.split('')
    // arr.push(...arr.splice(0, n))
    // return arr.join('')

    // 方法3: 分治, 建立两个字符串, 当n大于0时, 每个字符加入右边, 反之左边
    let left = ''
    let right = ''

    for (let char of s) {
      n-- > 0 ? right += char : left += char
    }

    return left + right
  };
