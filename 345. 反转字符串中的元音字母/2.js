/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 思路: 前后双指针, 互相对调, 先固定一个, 在运动另一个
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arrS = s.split("");
  let j = s.length - 1;

  for (let i = 0; i < j; i++) {
    if (arr.indexOf(arrS[i]) != -1) {
      while (arr.indexOf(arrS[j]) == -1) {
        j--;
      }
      [arrS[i], arrS[j]] = [arrS[j], arrS[i]];
      j--;
    }
  }

  return arrS.join("");
};
