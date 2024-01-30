function maxNumberOfBalloons(text: string): number {     
    const occurences = new Map<string, number>();
    for(let char of text){
       if('balon'.indexOf(char) > -1){
           occurences.set(char, (occurences.get(char) || 0)+1);
       }    
    }
    
    occurences.set('l', Math.floor((occurences.get('l') || 1) /2));
    occurences.set('o', Math.floor((occurences.get('o') || 1) /2));
    
    if(occurences.size < 'balon'.length){
        return 0;
    }
    
    let min = Number.POSITIVE_INFINITY;
    
    for(let num of occurences.values()){
        min = Math.min(min, num);
    }
    
    return min;
};


