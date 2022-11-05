function countComponents(n: number, edges: number[][]): number {
  //create graph
  const graph = new Map<number, number[]>();
  for(let i = 0; i<n; i++){
    graph.set(i, []);
  }
  for(const edge of edges){
    graph.get(edge[0])?.push(edge[1]);
    graph.get(edge[1])?.push(edge[0]);
  }


  const seen = new Set();
  let ans = 0;
  //map out a group
  const dfs = (node): void => {
    for(let neighbor of graph.get(node) || []){
      if(!seen.has(neighbor)){
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
  }

  //count number of groups
  while(seen.size<n){
    ans++;
    const nextNode = [...graph.keys()].find((node: number) => !seen.has(node));
    if(Array.isArray(graph.get(nextNode)) && !graph.get(nextNode)?.length){ //nodes with no edges
      seen.add(nextNode);
      continue;
    }
    dfs(nextNode);
  }

  return ans;
};