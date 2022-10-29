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

function diameterOfBinaryTree(root: TreeNode | null): number {
    
  let max = 0;
    
  const dfs = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    max = Math.max(max, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);
    
  return max;  
}