/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  // 思路: 遍历数组, 然后用一个字符串作为每次的二进制数, 然后判断是否被5整除, 保存在结果集里
  let res = [];
  let middle = 0;
  for (let i = 0; i < A.length; i++) {
    middle = middle * 2 + A[i];
    res.push(middle % 5 == 0 ? true : false);
    middle = middle % 10;
  }

  return res;
};
