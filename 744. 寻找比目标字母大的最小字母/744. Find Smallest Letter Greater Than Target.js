/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  if (target >= letters[right]) {
    return letters[left];
  }

  while (left <= right) {
    if (letters[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return letters[left];
};
