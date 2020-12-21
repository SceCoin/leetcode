/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let deads = new Set();
  for (let i = 0; i < deadends.length; i++) {
    deads.add(deadends[i]);
  }

  let visited = new Set();
  let q = [];

  let step = 0;
  q.push("0000");
  visited.add("0000");

  while (q.length > 0) {
    let sz = q.length;

    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      if (deads.has(cur)) {
        continue;
      }

      if (cur == target) {
        return step;
      }

      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        if (!visited.has(up)) {
          q.push(up);
          visited.add(up);
        }

        let down = minusOne(cur, j);
        if (!visited.has(down)) {
          q.push(down);
          visited.add(down);
        }
      }
    }
    step++;
  }
  return -1;
};

const plusOne = (s, j) => {
  let arr = s.split("");
  if (arr[j] === "9") {
    arr[j] = "0";
  } else {
    arr[j] = +arr[j] + 1 + "";
  }

  return arr.join("");
};

const minusOne = (s, j) => {
  let arr = s.split("");
  if (arr[j] == "0") {
    arr[j] = "9";
  } else {
    arr[j] = +arr[j] - 1 + "";
  }

  return arr.join("");
};
