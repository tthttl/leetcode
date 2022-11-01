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

function closestValue(root: TreeNode | null, target: number): number {

  const dfs = (root: TreeNode | null, target: number, min: number): number => {
    if(!root){
      return min;
    }

    min = Math.abs(min-target) < Math.abs(root.val-target) ? min : root.val;

    if(root.val < target){
      return dfs(root.right, target, min);
    } else {
      return dfs(root.left, target, min);
    }

  }

  return dfs(root,target, Infinity);

};