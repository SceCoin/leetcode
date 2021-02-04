/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 思路: 哈希表, 需要三个元素的哈希
  const rows = [];
  const columns = [];
  const boxes = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    columns[i] = [];
    boxes[i] = [];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];

      if (value != ".") {
        if (!rows[i].includes(value)) {
          rows[i].push(value);
        } else {
          return false;
        }

        if (!columns[j].includes(value)) {
          columns[j].push(value);
        } else {
          return false;
        }

        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (!boxes[boxIndex].includes(value)) {
          boxes[boxIndex].push(value);
        } else {
          return false;
        }
      }
    }
  }

  return true;
};
