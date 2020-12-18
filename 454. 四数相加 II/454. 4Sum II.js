/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D, h = new Map(), r = 0) {
  for (let a of A) {
    for (let b of B) {
      h.set(0 - a - b, (h.get(0 - a - b) || 0) + 1);
    }
  }

  for (let c of C) {
    for (let d of D) {
      h.has(c + d) && (r += h.get(c + d));
    }
  }

  return r;
};
