/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];

  const recursion = (root) => {
    if (root == null) {
      return root;
    }

    root.children.forEach((child) => {
      recursion(child);
    });

    res.push(root.val);
  };

  recursion(root);
  return res;
};
