/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let res = []
    let num = 10 ** (n)

    for (let i = 1; i < num; i++) {
      res.push(i)
    }

    return res
  };
