function maxAreaOfIsland(grid: number[][]): number {
  //2D matrix is already an iterable graph of rows and columns
  const rows = grid.length;
  const cols = grid[0].length;

  //create seen matrix
  const seen: boolean[][] = [];
  for(let i=0; i<rows; i++){
    seen.push(new Array(cols).fill(false));
  }

  //map out an island
  const isIsland = (row, col):boolean => {
    return row<rows && row>=0 && col<cols && col>=0 && grid[row][col] === 1;
  }
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  const dfs = (row: number, col: number, size: number): number => {
    for(const direction of directions){
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];
      if(isIsland(nextRow, nextCol) && !seen[nextRow][nextCol]){
        seen[nextRow][nextCol] = true;
        size++;
        size = dfs(nextRow, nextCol, size);
      }
    }
    return size;
  }

  //iterate over matrix
  let max = 0;
  for(let row=0; row<rows; row++){
    for(let col=0; col<cols; col++){
      if(grid[row][col] === 1 && !seen[row][col]){
        seen[row][col] = true;
        max = Math.max(max, dfs(row, col, 1));
      }
    }
  }
  return max;
};