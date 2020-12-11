/****
 *   归并排序的方法,
 *   开辟一个大的数组和小的数组, 把小的数组放到大的数组里,
 *   所以使用三个指针, index1指向大数组元素的末尾, index2指向小数组的元素末尾, 大数组后面还有空间, 所以tail指向最后一个空位
 *   如果index1里的值大于index2的值, 那么index1值移动到tail位置, index1左移, tail左移
 *   反之Index2 > index1里的值也是如此
 *   知道小数组遍历完, 也就是Index2左移越界
 */

const merge = function (num1, m, num2, n) {
  const index1 = m - 1;
  const index2 = n - 1;
  const tail = m + n - 1;

  while (index2 >= 0) {
    if (num1[index1] > num2[index2]) {
      num1[tail] = num1[index1];
      index1--;
      tail--;
    } else {
      num1[tail] = num2[index2];
      index2--;
      tail--;
    }
  }
};
