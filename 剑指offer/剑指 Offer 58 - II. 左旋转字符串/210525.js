/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    let num = n % s.length
    let left = s.slice(0, num)
    let right = s.slice(num, s.length)
    return right + left
  };
