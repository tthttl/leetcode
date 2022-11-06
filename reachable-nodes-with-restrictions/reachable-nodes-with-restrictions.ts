function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
  //create graph
  const graph = new Map<number, number[]>();
  for(let i=0; i<n; i++){
    graph.set(i, []);
  }
  for(const edge of edges){
    graph.get(edge[0])?.push(edge[1]);
    graph.get(edge[1])?.push(edge[0]);
  }

  //create seen 
  const seen = new Set<number>();

  const dfs = (node: number, size: number): number => {
    if(restricted.includes(node)){
      seen.add(node);
      return size;
    }
    size++;
    for(const neighbor of graph.get(node)|| []){
      if(!seen.has(neighbor)){
        seen.add(neighbor);
        size = dfs(neighbor, size);
      }
    }
    return size;
  }

  seen.add(0);
  return dfs(0, 0);
};