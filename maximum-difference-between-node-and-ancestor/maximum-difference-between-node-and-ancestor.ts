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

function maxAncestorDiff(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, max: number, min: number, ans: number): number => {
    if (!root) {
      return ans;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);
    ans = Math.abs(max - min);
    const left = dfs(root.left, max, min, ans);
    const right = dfs(root.right, max, min, ans);

    return Math.max(left, right);
  };

  return dfs(root, -Infinity, Infinity, 0);
}