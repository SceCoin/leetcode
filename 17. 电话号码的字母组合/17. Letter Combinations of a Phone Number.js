/**
 * @param {string} digits
 * @return {string[]}
 */
// DFS

// 思路是： 通过数字遍历字母， 每个数字都含有3或4个字母， 所以每次遍历都是先从第一个字母开始然后递归下一分支
//  ’23‘的递归就是先用指针指向2， 取出abc， 然后abc在各自分支， i取到3， 把a跟def分别结合， 然后在b，一直反复

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (curstr, i) => {
    // curstr是当前的字符串， i是指向数字的指针
    if (i > digits.length - 1) {
      // 因为最后的字符串长度一定等于数字字符串长度， 所以只要超过就返回
      res.push(curstr);
      return;
    }

    let letters = map[digits[i]]; // 取出数字里的字母字符串
    for (let l of letters) {
      //  每个字母相当于一条分支
      dfs(curstr + l, i + 1);
    }
  };

  dfs("", 0);
  return res;
};
