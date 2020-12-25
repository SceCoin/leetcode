/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return add(a, b);
};

const add = (a, b) => {
  return b === 0 ? a : add(a ^ b, (a & b) << 1);
};
