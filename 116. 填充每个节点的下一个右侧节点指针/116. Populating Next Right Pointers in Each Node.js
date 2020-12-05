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

// 思路: 直接将同父节点和跨节点的问题 变成 处理两个节点的问题, 这样就可以避免考虑跨不跨父节点的问题.
// 因为现在可以使用两个节点, 而一般只能使用一个节点
var connect = function (root) {
  if (root == null) {
    return root;
  }
  connectTwoNode(root.left, root.right);
  return root;
};

const connectTwoNode = (node1, node2) => {
  if (node1 == null || node2 == null) {
    return null;
  }

  // 前序遍历
  node1.next = node2;

  // 同父节点的连接
  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node2.left, node2.right);

  // 跨父节点的连接
  connectTwoNode(node1.right, node2.left);
};

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

// DFS算法:  其实依旧是前序遍历, 遍历的时候因为有存在跨节点, 所以导致同父节点可以指向,
// 但跨父节点无法指向, 但是由于存在了Next, 所以可以找到父节点的next, 因为是相邻, 所以连接的肯定是相邻父节点的left
// 就可以解决跨节点的问题.
var connect = function (root) {
  if (root == null || root.left == null) {
    return root;
  }

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
};
