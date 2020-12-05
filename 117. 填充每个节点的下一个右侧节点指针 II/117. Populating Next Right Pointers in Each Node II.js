/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// 思路: 使用BFS, 广度优先的方式
//
var connect = function (root) {
  if (root == null) {
    // base case
    return root;
  }

  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;

    while (len > 0) {
      let node = queue.shift();
      len--; // 这里是重点, 但队列里弹出了一个节点, 就要立马减长度

      if (len == 0) {
        node.next = null;
      } else {
        node.next = queue[0]; // 因为队列里保存的都是同层节点, 所以指向的下一个就一定是同层
      }

      // 下面都是入列操作
      if (node.left != null) {
        queue.push(node.left);
      }

      if (node.right != null) {
        queue.push(node.right);
      }
    }
  }

  return root;
};
