function numIslands(grid: string[][]): number {

    //re-create grid as boolean array to track seen status
    const rows = grid.length;
    const cols = grid[0].length;
    const seen: boolean[][] = [];

    for(let i=0; i<rows; i++){
      seen[i] = new Array<boolean>(cols).fill(false);
    }

    //put all the connected lands (1) into the seen matrix
    const isIsland = (row: number, col: number) => row<rows && row>=0 && col<cols && col>=0 && grid[row][col] === '1';
    const directions = [[0,1],[1,0],[-1,0],[0,-1]];
    const dfs = (row: number, col: number):void => {
      for(const [x, y] of directions){
        const adjacentRow = row+y;
        const adjacentCol = col+x;
        if(isIsland(adjacentRow, adjacentCol) && !seen[adjacentRow][adjacentCol]){
          seen[adjacentRow][adjacentCol] = true;
          dfs(adjacentRow, adjacentCol);
        }
      }
    }

    //iterate over grid and execute dfs if a land is found
    let ans = 0;
    for(let row=0; row<rows; row++){
      for(let col=0; col<cols; col++){
        if(grid[row][col] === '1' && !seen[row][col]){
          ans++;
          seen[row][col] = true;
          dfs(row, col);
        }
      }
    }

    return ans;
    
};