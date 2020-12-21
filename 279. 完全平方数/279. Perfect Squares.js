/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 思路: BFS遍历, 其实就是记录树的深度

  let res = 0;
  let queue = [n];
  let visited = new Set();

  while (queue.length) {
    let len = queue.length;
    res++;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      for (let j = 1; j * j <= curr; j++) {
        const k = curr - j * j;
        if (k === 0) return res;
        if (visited.has(k)) {
          continue;
        }

        visited.add(k);
        queue.push(k);
      }
    }
  }

  return res;
};
