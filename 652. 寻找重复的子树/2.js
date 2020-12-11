/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let res = [];
  let map = new Map();

  const recursion = (root) => {
    if (root == null) {
      return "#";
    }

    let stringTree =
      root.val + "#" + recursion(root.left) + "#" + recursion(root.right);

    if (!map.has(stringTree)) {
      map.set(stringTree, 1);
    } else {
      map.set(stringTree, map.get(stringTree) + 1);
    }

    if (map.get(stringTree) == 2) {
      res.push(root);
    }

    return stringTree;
  };

  recursion(root);
  return res;
};
