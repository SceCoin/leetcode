/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const list = [0, 1];

  const fi = (n) => {
    if (n == 1) {
      return 1;
    }

    if (n == 0) {
      return 0;
    }

    if (list[n]) {
      return list[n];
    }

    if (n >= 2) {
      list[n] = fi(n - 1) + fi(n - 2);
      return list[n];
    }
  };

  return fi(n);
};
