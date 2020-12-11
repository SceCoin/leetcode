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
var connect = function (root) {
  // 层序遍历, queue保存节点

  if (root == null) {
    return root;
  }

  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;

    while (len > 0) {
      let node = queue.shift();
      len--;

      if (len == 0) {
        node.next = null;
      } else {
        node.next = queue[0];
      }

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
