/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  if (letters[right] <= target) {
    return letters[0];
  }

  while (left <= right) {
    if (letters[left] > target) {
      right--;
    } else {
      left++;
    }
  }

  return letters[left];
};
