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
  const dfs = (root: TreeNode | null, curr: number, depth: number, ans: number): [number, number] => {
    if (!root) {
      return [depth, ans];
    }

    depth++;
    curr++;
    const left = dfs(root.left, curr,  depth, ans);
    const right = dfs(root.right, curr, depth, ans);
    depth = Math.max(left[0], right[0]);  
    ans = Math.max(left[1], right[1]);
    ans = Math.max(ans, (left[0]-curr)+(right[0]-curr));

    return [depth, ans];
  };

  return dfs(root, -1, -1, 0)[1];
}