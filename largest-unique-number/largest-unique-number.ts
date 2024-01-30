function largestUniqueNumber(nums: number[]): number {
  
    const occurences = new Map<number, number>();
    
    for(let num of nums){
      occurences.set(num, (occurences.get(num) || 0)+1);
    }
    
    let max = Number.NEGATIVE_INFINITY;
    
    for(let entry of occurences.entries()){
        if(entry[1] === 1){
            max = Math.max(max, entry[0]);
        }
    }
    
    return max === Number.NEGATIVE_INFINITY ? -1 : max;
    
};
























