

  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
     }
  }


function isValidBSTts(root: TreeNode | null): boolean {
  const dfs = (root: TreeNode | null, min: number, max: number): boolean => {
      if (root == null) {
          return true
      }

      if (root.val <= min || root.val >= max) {
          return false
      }

      return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
  }

  return dfs(root, -Infinity, Infinity)
};
