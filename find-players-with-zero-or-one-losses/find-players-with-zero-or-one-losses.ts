function findWinners(matches: number[][]): number[][] {
    const winners = {};
    const losers = {};
    const ans:number[][]=[[], []];
    for(const match of matches){
        winners[match[0]]=true;
        losers[match[1]] = (losers[match[1]]||0) +1
    }
    for(const winner of Object.keys(winners)){
        if(!losers[winner]){
            ans[0].push(Number(winner));
        }
    }
    for(const loser of Object.keys(losers)){
        if(losers[loser]===1){
            ans[1].push(Number(loser));
        }
    }
    return ans;
};