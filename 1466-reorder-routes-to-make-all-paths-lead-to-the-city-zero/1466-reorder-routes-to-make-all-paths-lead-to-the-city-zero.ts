function minReorder(n: number, connections: number[][]): number {
  //convert array of edges to undirected graph (hashmap of nodes as keys with their neighbours as array values)
  const graph = new Map<number, number[]>();
  const originalEdges = new Set<string>();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (const connection of connections) {
    const [x, y] = connection;
    graph.get(x)?.push(y);
    graph.get(y)?.push(x);
    originalEdges.add(`${x}, ${y}`);
  }

  //traverse graph AWAY from 0 node => loop through neighbours and traverse their neighbours
  //make sure a node is only visitited once

  const seen = new Set<number>();
  seen.add(0);  
  let ans = 0;
  const dfs = (node: number): number => {

    for(const neighbour of graph.get(node) || []){
      if(!seen.has(neighbour)){
        //check if current edge is in original graph => if yes, it means it has to be swapped, so its directed TOWARDS 0
        if(originalEdges.has(`${node}, ${neighbour}`)){
          ans++;
        }
        seen.add(neighbour);
        dfs(neighbour);
      }
    }
    return ans;
  }

  return dfs(0);

}