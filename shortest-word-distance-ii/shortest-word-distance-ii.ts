class WordDistance {
    
    map = new Map<string, number[]>();
    
    constructor(wordsDict: string[]) {
        for(let i=0; i<wordsDict.length; i++){
            if(!this.map.has(wordsDict[i])){
                this.map.set(wordsDict[i], []);   
            }
            this.map.get(wordsDict[i]).push(i);
        }
    }

    shortest(word1: string, word2: string): number {
        let min = Infinity;
        for(let i=0; i < this.map.get(word1).length; i++){
            for(let j=0; j < this.map.get(word2).length; j++){
                min = Math.min(min, Math.abs(this.map.get(word1)[i] - this.map.get(word2)[j]));
            }
        }
        return min;   
    }
}
/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */