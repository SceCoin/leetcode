/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 思路: 双指针, 左指针移动, 碰到元音时停下, 等右边找到元音交换, 然后继续再移动

  const arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let stringArr = s.split("");
  let j = stringArr.length - 1;

  for (let i = 0; i < j; i++) {
    if (arr.indexOf(stringArr[i]) != -1) {
      while (arr.indexOf(stringArr[j]) == -1) {
        j--;
      }

      [stringArr[i], stringArr[j]] = [stringArr[j], stringArr[i]];
      j--;
    }
  }

  return stringArr.join("");
};
