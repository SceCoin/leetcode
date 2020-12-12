/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let prev = [];

  for (let i = 0; i <= rowIndex; i++) {
    let curr = [];

    curr[0] = 1;
    curr[i] = 1;
    for (let j = 1; j < i; j++) {
      curr[j] = prev[j - 1] + prev[j];
    }
    prev = curr;
  }

  return prev;
};
