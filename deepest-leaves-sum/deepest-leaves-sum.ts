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

function deepestLeavesSum(root: TreeNode | null): number {
  let ans = 0;

  const bfs = (root: TreeNode | null) => {
    const q = [root];

    while(q.length){
      const currentLevelSize = q.length;
      ans = 0;

      for(let i=0; i<currentLevelSize; i++){
        const currNode = q.shift();
        ans += currNode?.val || 0;
        if(currNode?.left){
          q.push(currNode.left);
        }
        if(currNode?.right){
          q.push(currNode.right);
        }
      }

    }
  }

  bfs(root);

  return ans;
};