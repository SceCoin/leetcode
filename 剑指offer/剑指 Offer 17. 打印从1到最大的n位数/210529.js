/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    // let res =  []
    // let count = 10 ** n
    // for (let i = 1; i < count; i++) {
    //   res.push(i)
    // }
    // return res

    // 2. 内部函数
    let len = 10 ** n - 1
    return Array.from({length:len}, (item, index) => index + 1)
  };
