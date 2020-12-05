/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root == null) {
    return "#";
  }

  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let lists = data.split(",");

  const buildTree = (lists) => {
    let node = lists.shift();

    if (node == "#") {
      return null;
    }

    let root = new TreeNode(node);
    root.left = buildTree(lists);
    root.right = buildTree(lists);

    return root;
  };

  return buildTree(lists);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
