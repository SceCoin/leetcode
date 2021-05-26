/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    // 分治
    let left = ''
    let right = ''

    for (let char of s) {
      n-- > 0 ? (right += char) : (left += char)
    }

    return left + right
  };
