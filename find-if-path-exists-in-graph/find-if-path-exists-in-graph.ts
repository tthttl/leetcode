function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if(source === destination){
    return true;
  }
    
    //create graph
  const graph = new Map<number, number[]>();
  for(let i=0; i<n; i++){
    graph.set(i, []);
  }
  for(const edge of edges){
    graph.get(edge[0])?.push(edge[1]);
    graph.get(edge[1])?.push(edge[0]);
  }

  //iterate over it
  const seen = new Set();
  let ans = false;  
  const dfs = (node):boolean => {
    for(let neighbor of graph.get(node)|| []){
      if(neighbor === destination){
        ans = true;
      }
      if(!seen.has(neighbor)){
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
    return ans;
  }

  seen.add(source);
  return dfs(source);
};