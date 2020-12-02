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

// 跨节点连接
var connect = function (root) {
  if (root == null) {
    return null;
  }

  connectTwoNode(root.left, root.right);

  return root;
};

const connectTwoNode = (node1, node2) => {
  if (node1 == null || node2 == null) {
    return null;
  }

  node1.next = node2;

  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node2.left, node2.right);

  connectTwoNode(node1.right, node1.left);
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

// 不跨节点直接连接, 因为已经存在 root.next
var connect = function (root) {
  // 前序遍历

  if (root == null || root.left == null) {
    return root;
  }

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
};
