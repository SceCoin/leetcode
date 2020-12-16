/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root == null) {
    return '#'
  }

  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const list: any[] = data.split(',')

  const buildTree = (list: any[]): TreeNode => {
    const nodeVal: any = list.shift()
    if (nodeVal == '#') {
      return null
    }

    const root: TreeNode = new TreeNode(nodeVal)
    root.left = buildTree(list)
    root.right = buildTree(list)

    return root
  }

  return buildTree(list)
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
