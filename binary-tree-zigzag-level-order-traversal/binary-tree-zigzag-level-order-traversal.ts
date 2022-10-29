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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = [];
    if(!root){
        return [];
    }

    const bfs = (root: TreeNode | null): void => {
      const q = [root];
      let currLevel = 0;

      while(q.length){
        const currentLevelSize = q.length;
        const valuesByLevel:number[] = [];
        currLevel++;

        for(let i=0; i<currentLevelSize; i++){
          const currNode = q.shift();

          if(currLevel % 2 !== 0){
            valuesByLevel.push(currNode?.val || 0);
          } else {
            valuesByLevel.unshift(currNode?.val || 0);
          }

          if(currNode?.left){
            q.push(currNode.left);
          }
          if(currNode?.right){
            q.push(currNode.right);
          } 
        }

        ans.push(valuesByLevel);
      }
    }

    bfs(root);

    return ans;
};