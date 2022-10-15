function findWinners(matches: number[][]): number[][] {
    const players = new Set<number>();
    const losers = {};
    const ans:number[][]=[[], []];
    for(const match of matches){
        players.add(match[0]);
        players.add(match[1]);
        losers[match[1]] = (losers[match[1]]||0) +1
    }
    for(const player of players.values()){
        const losses = losers[player];
        if(!losses){
            ans[0].push(player);
        }
        if(losses===1){
            ans[1].push(player);
        }
    }
    for(const group of ans){
        group.sort((a,b)=>a-b);
    }
    return ans;
};