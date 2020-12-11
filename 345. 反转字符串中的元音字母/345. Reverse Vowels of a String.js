/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowelInS = [];

  // 找到字符中的元音
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      vowelInS.push(s[i]);
    }
  }
  // 把元音翻转
  var reverseVowelInS = vowelInS.reverse();

  // 从在在找到的元音位置上把翻转的元音一一添加进去
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      s.splice(i, 1, reverseVowelInS.shift());
    }
  }

  return s.join("");
};

/**
 * @param {string} s
 * @return {string}
 */

// 头尾双指针, 字符串转数组,  然后头指针遍历, 找到是元音的字母时, 再遍历尾指针, 找到后二者交换
var reverseVowels = function (s) {
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arrS = s.split("");

  let j = arrS.length - 1;

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
